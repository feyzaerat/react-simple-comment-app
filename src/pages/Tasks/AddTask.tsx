
import React, { useState } from 'react';
import { addTask } from '../../services/API';
import { TaskModel } from '../../models/responses/tasks/GetTask';
import {jwtDecode} from 'jwt-decode';
import './taskDetail.css';

const AddTask: React.FC = () => {
  const [newTask, setNewTask] = useState<TaskModel>({
    title: '',
    username: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log('User input:', name, value); // Log user input changes
  };

  const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Decode the JWT token to get the username
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found');
      return;
    }
    const decodedToken: any = jwtDecode(token);
    const username = decodedToken.sub;

    // Set loading to true before making the API call
    setLoading(true);

    try {
      // Call the addTask API with the username manually added
      await addTask({
        ...newTask,
        username: username,
      });
      // Reset the new task state
      setNewTask({
        title: '',
        username: '',
        content: '',
      });
      setError(null);
    } catch (err) {
      // Handle any errors by setting the error state
      setError((err as any).message);
    } finally {
      // Set loading to false after the API call is complete
      setLoading(false);
    }
  };

  return (
    <div className='container mt-5 pt-5'>
      <div className="card ">
        <h3>Add Task</h3>
        <form onSubmit={handleAddTask}>
          <div className="form-group">
            <label htmlFor='title'>Title:</label>
            <input
              placeholder='Enter Title'
              type="text"
              className="form-control"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor='content'>Content:</label>
            <textarea
              placeholder='Enter Content'
              className="form-control"
              name="content"
              value={newTask.content}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-retro-primary" disabled={loading}>
            {loading ? 'Adding...' : 'Add Task'}
          </button>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddTask;