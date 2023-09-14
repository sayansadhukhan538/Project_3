/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {dashboardNetworkCall} from '../services/dashboard.service'
const Dashboard = () => {
  const [data, setData] = useState([]);
  // async function apiCall() {
  //   try {
  //     const res = await axios("https://reqres.in/api/users?page=2");
  //     setData(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
   async function apiCall(){
    const res = await dashboardNetworkCall();
    if(res.success){
      setData(res.data);
    }
   }
   apiCall();
  }, []);

  function logOut() {
    localStorage.removeItem("token");
    toast.success('Log Out done', {
        duration: 4000,
      });
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
