import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
export const getAllComments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
export const getUserById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const getTaskById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const getCommentById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const addUser = async (id: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const addTask = async (id: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/tasks/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const addComment = async (id: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/comments/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const updateUser = async (id: number) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const updateTask = async (id: number) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const updateComment = async (id: number) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const deleteUser = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const deleteTask = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const deleteComment = async (id: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};
export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/api/login`, {
    username,
    password,
  });
  return response.data;
};
export const register = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/api/register`, {
    username,
    password,
  });
  return response.data;
};

