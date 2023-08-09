import './App.css';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { FormControl, Stack } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountdownTimer from './Components/Clock/TimerCounter';
import Context1 from "./context"
import Donor from './Components/Donor/Donor';
import GroupPage from './Components/Group/GroupPage';
import MainPage from './Components/Donor/MainPage';
import AdminPage from './Components/Admin/AdminPage';
import ButtomPayment from './Components/Payment/ButtomPayment';

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
    xhr.send(JSON.stringify({
      "UserName": "Mercazhaitgalut@gmail.com",
      "Password": "elisin203044390",
      "func": "GetContributors"
    }));

    xhr.onload = function() {
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
            <Route path="/" element={
              <>
                <div className='page'>
                  <h1>!חב"ד בעתיקא ממשיכים בשיא המרץ</h1>
                  <div className='Buttons'>
                    <FormControl>
                      <Stack spacing={2} sx={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: "center" }}>
                        <Button variant="contained" sx={{ marginTop: "2em" }} onClick={() => setAmount(120)}>תרום 120 שקלים</Button>
                        <Button variant="contained" onClick={() => setAmount(300)}>תרום 300 שקלים</Button>
                        <Button variant="contained" onClick={() => setAmount(770)}>תרום 770 שקלים</Button>
                        <Button variant="contained" onClick={() => setAmount(null)}>תרום סכום אחר</Button>
                      </Stack>
                    </FormControl>
                  </div>
                  {/* <div>
        <h2>הליך התשלום</h2>
        <form onSubmit={handleSubmit}>
          <ContactForm />
        </form>
      </div> */}
                  {/* <div>
                    <h2>שעון הספירה לאחור</h2>
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                    <div>
                      <h3>היעד: {goal} שקלים</h3>
                      <h4>ההתקדמות: {progress}%</h4>
                    </div>
                    <div>
                      <progress value={progress} max={100} />

                    </div>
                  </div> */}

                  {/* <div>
                    <h2>רשימת התורמים</h2>
                    <div>
                      {donors.map((d) => {
                        <Donor key={d.id} />
                      })}
                    </div>
                  </div> */}
                </div>
                {/* <ProgressAndClock /> */}

                <div>
                  <MainPage />
                </div>
                <ButtomPayment />
              </>
            } />
            <Route path="/:groupId/:groupName" element={<GroupPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </Context1.Provider>
    </>
  );
};



export default App;
