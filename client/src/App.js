import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { FormControl, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountdownTimer from "./Components/Clock/TimerCounter";
import Context1 from "./context";
import Donor from "./Components/Donor/Donor";
import GroupPage from "./Components/Group/GroupPage";
import MainPage from "./Components/Main/MainPage";
import AdminPage from "./Components/Admin/AdminPage";
import ButtomPayment from "./Components/Payment/ButtomPayment";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [goal, setGoal] = useState(50000);
  const [progress, setProgress] = useState(0);
  const [donors, setDonors] = useState([]);

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  function getContributors() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://kesherhk.info/ConnectToKesher/ConnectToKesher");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        UserName: "Mercazhaitgalut@gmail.com",
        Password: "elisin203044390",
        func: "GetContributors",
      })
    );

    xhr.onload = function () {
      if (xhr.status === 200) {
        const contributors = JSON.parse(xhr.responseText);
        console.log(contributors);
      } else {
        console.log("Error: " + xhr.status);
      }
    };
  }

  return (
    <>
      <MyContext.Provider value={{ amount, setAmount }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:groupId/:groupName" element={<GroupPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
};

export default App;
