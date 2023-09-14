/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../services/auth.service";
import { toast } from "react-hot-toast";

const Login = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(true);
  function onChangeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormdata((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    let validRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!validRegex.test(formData.email)) {
      toast.error("Invalid Email ID! ");
    } else {
      const response = await logIn(formData);
      if (response.isSuccess) {
        toast.success(response.message, {
          duration: 4000,
        });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate("/dashboard");
      } else {
        toast.error(response.message, {
          duration: 4000, // Optional: Set the duration (in milliseconds)
        });
      }
      // try {
      //     const response = await logIn(formData);

      //     if (response.status === 200) {
      //       console.log('Login successful:', response.data);
      //         navigate('/dashboard')
      //         localStorage.setItem('token', JSON.stringify(response.data.token));
      //     } else {
      //       console.log('Login failed');

      //     }
      //   } catch (error) {
      //     console.error('Error:', error);
      //   }
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Log In</h1>
        <div className="input">
          <label htmlFor="">
            <p>E-mail</p>
            <input
              type="text"
              placeholder=""
              required
              value={formData.email}
              onChange={onChangeHandler}
              name="email"
            />
          </label>
          <label htmlFor="" id="password">
            <p>Password</p>
            <input
              type={showPassword ? "password" : "text"}
              placeholder=""
              required
              value={formData.password}
              onChange={onChangeHandler}
              name="password"
            />
            <span id="show" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? "show" : "hide"}
            </span>
          </label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={onChangeHandler}
            id="rememberMe"
          />
          <label htmlFor="rememberMe" style={{ color: "black" }}>
            Remember Me?
          </label>
          <br />
          <button id="submit" onClick={submitHandler}>
            Log In
          </button>
        </div>
        <div className="other">
          <p>Need an account?</p>
          <Link to="/signup"> Sign up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
