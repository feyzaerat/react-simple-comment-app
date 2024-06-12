
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTaskById } from "../../services/API"; 
import { addComment } from "../../services/API"; 
import { FaCommentDots } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import "./taskDetail.css";
import { AddCommentRequest } from "../../models/requests/comment/AddCommentRequest";

interface Props {}

interface Task {
  id: number;
  title: string;
  content: string;
}
interface Comment {
  id: number;
  content: string;
}

const TaskDetail: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showCommentForm, setShowCommentForm] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (id) {
          const taskData = await getTaskById(Number(id));
          setTask(taskData);
        }
      } catch (error) {
        setError("Error fetching task details");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleCommentFormToggle = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const commentContent = formData.get("comment") as string;

    if (commentContent.trim() !== "") {
      const newCommentData: AddCommentRequest = {
        content: commentContent,
        userName: "User", // Kullanıcı adını burada belirleyin ya da bir oturumdan alın
        taskId: task?.id || 0,
        userId: task?.id || 0,
      };

      try {
        // Yeni yorumu eklemek için API çağrısı yap
        // Örnek olarak addComment fonksiyonunu kullanıyoruz
        // addComment fonksiyonu API'den dönen cevabı döndürecektir
        const newComment = await addComment(newCommentData);

        // Yeni yorumu yorumlar listesine ekleyin
        setComments([...comments, newComment]);
      } catch (error) {
        console.error("Error adding comment:", error);
        // Hata durumunda kullanıcıya bilgi verilebilir
      }
    }

    // Yorum gönderildikten sonra formu sıfırla ve kapat
    e.currentTarget.reset();
    setShowCommentForm(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="card taskDetail">
        {task ? (
          <div>
            <div className="row">
              <div className="col-12">
                <h3>{task.title}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>{task.content}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-right">
                <button onClick={handleCommentFormToggle} title="Add Comment" className="btn btn-retro-dark">
                  <FaCommentDots /> 
                </button>
              </div>
            </div>
            {showCommentForm && (
              <div className="row mt-5">
                <div className="col-12">
                  <form onSubmit={handleSubmitComment}>
                    <div className="row ml-3">
                      <div className="col-10">
                        <textarea name="comment" className="form-control" placeholder="Add comment..." />
                      </div>
                      <div className="col-2">
                        <button title="send" className="p-3 btn half-rounded btn-retro-dark" type="submit">
                          <IoMdSend />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {comments.length > 0 && (
              <div className="row mt-5">
                <div className="col-12">
                  <h4>Comments:</h4>
                  <ul>
                    {comments.map((comment) => (
                      <li key={comment.id}>{comment.content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="row">
            <div className="col-12">
              <p>No task found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetail;