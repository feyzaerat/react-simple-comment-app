import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../../services/API'; // Doğru dosya yolunu belirttiğinizden emin olun
import "./taskDetail.css";

type Props = {}

const TaskDetail: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (id) {
          const taskData = await getTaskById(Number(id));
          setTask(taskData);
        }
      } catch (error) {
        setError('Error fetching task details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className='container mt-5 pt-5'>
      <div className="card taskDetail">
      <h3>Task Details for ID: {id}</h3>
      {task ? (
        <div>
          <h3>{task.title}</h3>
          <p>{task.content}</p>
          {/* Görevin diğer özelliklerini buraya ekleyin */}
        </div>
      ) : (
        <p>No task found</p>
      )}
      </div>
    </div>
  );
}

export default TaskDetail;
