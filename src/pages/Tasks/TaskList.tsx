import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaTrashCan } from "react-icons/fa6";
import { deleteTask, getAllTasks } from "../../services/API";
import { Link } from "react-router-dom";
import "./taskList.css";


const getLoggedInUserId = () => {
  

  return 1;
};

const TaskList: React.FC = () => {
  return(
    <div>
      My Task
    </div>
  );
  
};

export default TaskList;
