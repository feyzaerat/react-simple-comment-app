import axios from "axios";
import { TaskModel } from "../models/responses/tasks/GetTask";
import { AddCommentRequest } from "../models/requests/comment/AddCommentRequest";

const API_BASE_URL = "http://localhost:8080/api/";

const api = axios.create ({baseURL: API_BASE_URL})  

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});




export const getAllUsers = async () => {
  try {
    const response = await api.get(`${API_BASE_URL}users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
export const getAllTasks = async () => {
  try {
    const response = await api.get(`${API_BASE_URL}tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
export const getAllComments = async () => {
  try {
    const response = await api.get(`${API_BASE_URL}comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await api.get(`${API_BASE_URL}users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const getTaskById = async (id: number) => {
  try {
    const response = await api.get(`${API_BASE_URL}tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const getCommentById = async (id: number) => {
  try {
    const response = await api.get(`${API_BASE_URL}comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const getCommentByTaskId = async (taskId: number) => {
  try {
    const response = await api.get(`${API_BASE_URL}tasks/getAllCommentsByTaskId/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${taskId}:`, error);
    throw error;
  }
};

export const addUser = async (id: number) => {
  try {
    const response = await api.post(`${API_BASE_URL}users/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const addTask = async (newTask: TaskModel) => {
  try {
    const response = await api.post(`${API_BASE_URL}tasks/add-task`, newTask);
    return response.data;
  } catch (error) {
    console.error(`Error adding task:`, error);
    throw error;
  }
};
export const addComment = async (newComment: AddCommentRequest) => {
  try {
    const response = await api.post(`${API_BASE_URL}comments/add-comment`, newComment);
    return response.data;
  } catch (error) {
    console.error(`Error adding comment:`, error);
    throw error;
  }
};

export const updateUser = async (id: number) => {
  try {
    const response = await api.put(`${API_BASE_URL}users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const updateTask = async (id: number, updatedTask: TaskModel) => {
  try {
    console.log("Update Task Request Body:", updatedTask); 
    const response = await api.put(`${API_BASE_URL}tasks/${id}`, updatedTask);
    console.log(response.data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with id ${id}:`, error);
    
    throw error;
  }
};
export const updateComment = async (id: number) => {
  try {
    const response = await api.put(`${API_BASE_URL}comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await api.delete(`${API_BASE_URL}users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const deleteTask = async (id: number) => {
  try {
    const response = await api.delete(`${API_BASE_URL}tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const deleteComment = async (id: number) => {
  try {
    const response = await api.delete(`${API_BASE_URL}comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

export const login = async (username: string, password: string) => {
  const response = await api.post(`${API_BASE_URL}login`, {
    username,
    password
  });
  return response.data;
};
export const register = async (username: string, password: string) => {
  const response = await api.post(`${API_BASE_URL}register`, {
    username,
    password
  });
  return response.data;
};

