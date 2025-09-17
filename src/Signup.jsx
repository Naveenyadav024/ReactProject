import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    let valid = true;

    // ✅ Username Validation
    if (!username) {
      setUserNameError("⚠ Username is required");
      valid = false;
    } else {
      setUserNameError("");
    }

    // ✅ Password Validation
    if (!password) {
      setPasswordError("⚠ Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    // ✅ Check credentials if valid
    if (valid) {
      if (username === "admin" && password === "admin@123") {
        alert("✅ Login Successful");
        navigate("/"); // redirect to homepage
      } else {
        alert("❌ Invalid Credentials");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "20px" }}
      >
        <h3 className="text-center mb-4 fw-bold text-primary">Login</h3>

        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              ref={userNameRef}
              className={`form-control ${userNameError ? "is-invalid" : ""}`}
              placeholder="Enter username"
            />
            {userNameError && (
              <div className="invalid-feedback">{userNameError}</div>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              ref={passwordRef}
              className={`form-control ${passwordError ? "is-invalid" : ""}`}
              placeholder="Enter password"
            />
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              className="btn btn-primary rounded-pill"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        {/* Signup Link */}
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
