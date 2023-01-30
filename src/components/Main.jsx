import React from "react";
import { Top } from "./Top";
import { Mid } from "./Mid";
import { Bottom } from "./Bottom";
import { useState } from "react";
import Axios from 'axios'

export const Main = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);

  const fetchData = () => {
    Axios.get(`https://api.github.com/users/${username}`).then((res) => {
      setData(res.data)
    })
    console.log(data)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  return (
    <div className="main">
      <Top />
      <Mid handleUsernameChange={handleUsernameChange} fetchData={fetchData} />
      <Bottom data={data}/>
    </div>
  );
};
