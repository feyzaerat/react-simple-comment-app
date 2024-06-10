import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../services/API";
import { FaEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaTrashCan } from "react-icons/fa6";

import "./home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState<number>(6); // Her sayfada gösterilecek görev sayısı

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Mevcut sayfadaki görevleri al
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Sayfayı değiştir
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="Home">
      <div className="container">
        <div className="row titleRow">
          <div className="col-9">
            <p className="">Task List</p>
          </div>
          <div className="col-3">
            <Link className="btn btn-light" to="">
              Add New Task
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="row">
            {currentTasks.map((task) => (
              <div className="col-6" key={task.id}>
                <div className="card">
                  <p>{task.title}</p>
                  <div className="btnContainer">
                    <Link to={`/tasks/${task.id}`}><FaEye /></Link>
                    <Link to=""><GrEdit /></Link>
                    <Link to=""><FaTrashCan /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              {/*Pagination */}
              <nav className="text-center mx-auto">
                <p className="pagination">
                  {Array.from({
                    length: Math.ceil(tasks.length / tasksPerPage),
                  }).map((_, index) => (
                    <span key={index} className="page-item">
                      <button
                        onClick={() => paginate(index + 1)}
                        className="page-link"
                      >
                        {index + 1}
                      </button>
                    </span>
                  ))}
                </p>
              </nav>
              {/*Pagination */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
