import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const userNameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    let valid = true;

    if (!username) {
      setUserNameError("⚠ Username is required");
      valid = false;
    } else {
      setUserNameError("");
    }

    if (!password) {
      setPasswordError("⚠ Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      if (username === "admin" && password === "admin@123") {
        alert("Login Successful ✅");
        navigate("/");
      } else {
        alert("Invalid Credentials ❌");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "20px" }}>
        <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${userNameError ? "is-invalid" : ""}`}
              placeholder="Enter username"
              ref={userNameRef}
            />
            {userNameError && <div className="invalid-feedback">{userNameError}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${passwordError ? "is-invalid" : ""}`}
              placeholder="Enter password"
              ref={passwordRef}
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>

          <div className="d-grid">
            <button className="btn btn-primary rounded-pill" type="submit">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-3 text-muted">
          Don’t have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
