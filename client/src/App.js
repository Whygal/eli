import './App.css';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { FormControl, Stack } from '@mui/material';
import CountdownTimer from './Components/Clock/TimerCounter';
import Context1 from "./context"
import Donor from './Components/Donor/Donor';
import DonorsList from './Components/Donor/DonorsList';
import YoutubeEmbed from './Components/Video/YoutubeEmbed';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [goal, setGoal] = useState(50000);
  const [progress, setProgress] = useState(0);
  const [donors, setDonors] = useState([]);

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <Context1.Provider value={{ donors }}>
        <div className='page'>
          <h1>!חב"ד בעתיקא ממשיכים בשיא המרץ</h1>
          <div className='video'>
            <YoutubeEmbed/>
          </div>
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
          <div>
            <h2>שעון הספירה לאחור</h2>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            <div>
              <h3>היעד: {goal} שקלים</h3>
              <h4>ההתקדמות: {progress}%</h4>
            </div>
            <div>
              <progress value={progress} max={100} />
            </div>
          </div>
          <div>
            <h2>רשימת התורמים</h2>
            <div>
              {donors.map((d) => {
                <Donor key={d.id} />
              })}
            </div>
          </div>
        </div>
      </Context1.Provider>
      <div>
        <div className='bg-body-secondary rlt'>
          <div className=''>
            <DonorsList />
          </div>
        </div>
      </div>
    </>
  );
};



export default App;
