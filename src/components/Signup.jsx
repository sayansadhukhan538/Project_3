import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/auth.service";
import { toast } from "react-hot-toast";
const Signup = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  function onChangeHandler(e) {
    setSignUpData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function submitHandler(event) {
    event.preventDefault();
    let validRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!validRegex.test(signUpData.email)) {
      toast.error("Invalid Email ID! ");
    } else if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Password doesn't match with Confrim Password!");
    } else {
      const response = await signUp(signUpData);
      if (response.isSuccess) {
        toast.success(response.message, {
          duration: 4000,
        });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate("/}");
      } else {
        toast.error(response.message, {
          duration: 4000,
        });
      }
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Sign Up</h1>
        <div className="input">
          <label htmlFor="name">
            <p>Full Name</p>
            <input
              type="text"
              placeholder="enter your full name"
              required
              id="name"
              value={signUpData.name}
              onChange={onChangeHandler}
              name="name"
            />
          </label>
          <label htmlFor="email">
            <p>E-mail</p>
            <input
              type="email"
              placeholder="Mail Address"
              required
              id="email"
              value={signUpData.email}
              onChange={onChangeHandler}
              name="email"
            />
          </label>
          <label htmlFor="dob">
            <p>Date of Birth</p>
            <input
              type="date"
              value={signUpData.dob}
              required
              id="dob"
              onChange={onChangeHandler}
              name="dob"
            />
          </label>
          <p id="p">Gender</p>
          <label className="gender">Male</label>

          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={signUpData.gender === "male"}
            onChange={onChangeHandler}
          />
          <label className="gender">Female</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            checked={signUpData.gender === "female"}
            onChange={onChangeHandler}
          />

          <label className="gender">Other</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={signUpData.gender === "other"}
            onChange={onChangeHandler}
          />

          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              required
              placeholder="Min 6 Char"
              id="password"
              onChange={onChangeHandler}
              value={signUpData.password}
              name="password"
            />
          </label>
          <label htmlFor="confirmPassword">
            <p>Confirm Password</p>
            <input
              type="password"
              required
              id="confirmPassword"
              onChange={onChangeHandler}
              value={signUpData.confirmPassword}
              name="confirmPassword"
            />
          </label>
          <button onClick={submitHandler}>SIGN UP</button>
        </div>
        <div className="other">
          <p>Already have an account?</p>
          <Link to="/">Log in</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
