import "./Login Style/Login2.css";
import "./Login MediaQ/MediaQLogin.css";
import LoginImgBg from "./logimg2.png";
import { GoogleLogo } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login2() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const handleLogin = async (e) =>{
    e.preventDefault();
    try {
      // const res = await axios.post('http://localhost:5000/api/auth/login',{
      // const res = await axios.post('https://onlineshopping-1-for-testing-email-and.onrender.com/api/auth/login',{
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      const { token, user} = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("userEmail", user.email);
 
      if (user.email === "sanjay46512002@gmail.com") {
      navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };
  
  return (
    <div className="login-main">
      <div className="login-container container-fluid">
        <div className="row login-row">
          <div className="col login-col1 d-none d-lg-block">
            <div className="login-img-container d-flex justify-content-center align-items-center">
              <img src={LoginImgBg} className="login-img" alt="Login Img Bg" />
            </div>
          </div>
          <div className="col login-col2">
            <div className="login-form-container d-flex align-items-center justify-content-center">
              <form className="login-form">
                <div className="login-text-container mb-3 text-center">
                  <p className="login-welcome-para1 text-white mb-2">
                    Welcome to <span className="login-heading-1">ONLINE</span>{" "}
                    <span className="login-heading-2">SHOPPING</span>
                  </p>
                  <p className="login-welcome-para2 text-white">
                    Login with your account
                  </p>
                </div>
                <div className="login-input-container1 mb-2">
                  <label htmlFor="email" className="login-email text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="login-input-email"
                    placeholder="User Email"
                    required
                  />
                </div>
                <div className="login-input-container1 mb-0">
                  <label htmlFor="password" className="login-password text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="login-input-password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="login-input-container1">
                  <p className="login-forgotPass-para">
                    <Link className="login-forgotPass-Link text-decoration-none">
                      Forgot Password
                    </Link>
                  </p>
                </div>
                <div className="login-btn-container text-center">
                  <button type="submit" onClick={handleLogin} className="login-btn text-white">
                    LOGIN
                  </button>
                </div>
                <div className="login-createAcc-container text-center mt-2">
                  <p className="login-create-acc-para text-white">
                    Don't have an account?
                    <Link
                      to="/Signup"
                      className="login-create-acc-link text-decoration-none"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
                <div className="login-or-container text-center">
                  <p className="login-or-para text-white">Or</p>
                </div>
                <div className="login-acc-container text-center">
                  <Link className="login-acc-link text-decoration-none text-white">
                    <p className="login-acc-para">
                      <GoogleLogo
                        className="login-social-icons d-inline-block bg-white rounded-circle me-2"
                        color="#e94235"
                        weight="fill"
                      />
                      CONTINUE WITH GOOGLE
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
