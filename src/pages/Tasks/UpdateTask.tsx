import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateTask } from "../../services/API";
import "./taskDetail.css";
import { TaskModel } from "../../models/responses/tasks/GetTask";
import axios from "axios";

type Props = {
  task: TaskModel;
};

const UpdateTask: React.FC<Props> = ({ task }) => {
  const { id } = useParams<{ id: string }>();
  const [taskId, setTaskId] = useState<number>(0);

  const [updatedTask, setUpdatedTask] = useState<TaskModel>({ ...task });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTaskId(id ? parseInt(id) : 0);
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const updateTaskManually = async (id: number, updatedTask: TaskModel) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/tasks/${id}`, updatedTask);
      return response.data;
    } catch (error) {
      console.error(`Error updating task with id ${id}:`, error);
      throw error;
    }
  };
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setLoading(true);
    try {
      console.log("Updated Task:", updatedTask);
      await updateTaskManually(taskId, updatedTask);
      console.log("Updated Task:", updatedTask);
      console.log("Task updated successfully!");
    } catch (error) {
      setError("Error updating task");
      console.error("Error updating task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="card">
        <div className="row">
          <div className="col-12">
            <h3>Update Task</h3>
          </div>
        </div>

        <form onSubmit={handleUpdate}>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label>Title:</label>
                <input
                placeholder="enter title"
                  type="text"
                  className="form-control"
                  name="title"
                  value={updatedTask.title}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
   
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label>Content:</label>
                <textarea
                placeholder="Enter Content"
                  className="form-control"
                  name="content"
                  value={updatedTask.content}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-retro-primary"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Task"}
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {error && <small className="text-danger">{error}</small>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
