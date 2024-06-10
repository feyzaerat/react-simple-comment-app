import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, UserList, UserDetails,TaskDetails, TaskList, Login } from "../pages";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="*" element={<Home />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
      
    </Routes>
  );
};

export default Router;
