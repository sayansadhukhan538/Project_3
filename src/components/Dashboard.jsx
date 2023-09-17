/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import {dashboardNetworkCall} from '../services/dashboard.service'
import AuthContext from "../context/auth.context";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const {logOut} = useContext(AuthContext);
  useEffect(() => {
   async function apiCall(){
    const res = await dashboardNetworkCall();
    if(res.success){
      setData(res.data);
    }
   }
   apiCall();
  }, []);

  
  return (
    <div className="main">
      <h1>Dashboard</h1>
      <div className="link">
        <button onClick={logOut}>Log Out</button>
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
