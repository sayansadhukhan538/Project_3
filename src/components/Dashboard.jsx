/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  async function apiCall() {
    try {
      const res = await axios("https://reqres.in/api/users?page=2");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    apiCall();
    console.log(data);
  }, []);
  function logOut() {
    localStorage.removeItem("token");
  }
  return (
    <div className="main">
      <h1>Dashboard</h1>
      <div className="link">
        <Link onClick={logOut} to="/">
          Log Out
        </Link>
      </div>
      <div className="grid">
        {data.map((user) => {
          const { id, first_name, last_name, email, avatar } = user;
          return (
            <div className="root" key={id}>
              <p>
                Name: <span>{first_name}</span>
                <span>{last_name}</span>
              </p>
              <div>
                <img src={avatar} alt="" />
              </div>
              <p>Mail id: {email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
