import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/API";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log("token response:", response);
      localStorage.setItem('token', response);

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      
      setErrorMessage("Wrong password or username");
    }
  };
  return (
    <div className="container mt-5 pt-5 ">
      <div className="card p-5 border-0 ">
        <div className="row">
          <div className="col-12">
            <div className="titleContainer text-center">
              <h4>LOGIN</h4>
            </div>
          </div>
        </div>

        <div>
          <label className="form-label mt-3">Username :</label>
          <input
            className="form-control"
            placeholder="enter"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label mt-3">Password :</label>
          <input
            className="form-control"
            placeholder="enter"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <div className="btnContainer mt-2">
          <button type="submit" className="btn btn-retro-primary" onClick={handleLogin}>
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
