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

  // useEffect(() => {
  //   ContactForm.setConfig({
  //     action: "https://example.com/contact",
  //     method: "post",
  //     fields: [
  //       {
  //         name: "name",
  //         label: "Your Name",
  //         placeholder: "Your Name",
  //         required: true,
  //       },
  //       {
  //         name: "email",
  //         label: "Your Email",
  //         placeholder: "Your Email",
  //         required: true,
  //       },
  //       {
  //         name: "amount",
  //         label: "Amount",
  //         placeholder: "Amount",
  //         required: true,
  //       },
  //     ],
  //   });
  // }, []);

  // const handleChange = (e) => {
  //   setAmount(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("name", e.target.elements.name.value);
  //   formData.append("email", e.target.elements.email.value);
  //   formData.append("amount", e.target.elements.amount.value);

  //   ContactForm.send(formData, (response) => {
  //     if (response.ok) {
  //       setAmount(0);
  //       setDonors([...donors, {
  //         name: response.name,
  //         amount: response.amount,
  //       }]);
  //     } else {
  //       console.log(response);
  //     }
  //   });
  // };

  // const clock = ()=> {

  // }

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
      <Context1.Provider value={{ donors }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:groupId/:groupName" element={<GroupPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </Context1.Provider>
    </>
  );
};

export default App;
