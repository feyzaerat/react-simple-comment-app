import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, UserList, UserDetails,TaskDetails, TaskList, Login, UpdateTask, AddTask } from "../pages";
import { updateTask } from "../services/API";


const Router = () => {
  const [task, setTask] = useState<any | null>(null);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="*" element={<Home />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
      <Route path="/update-task/:id" element={<UpdateTask task={task}/>} />
      
    </Routes>
  );
};

export default Router;
