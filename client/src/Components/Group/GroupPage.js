import React, { useState, useEffect } from "react";
import { FormControl, Stack, Container } from "@mui/material";
import Button from "@mui/material/Button";
import CountdownTimer from "../Clock/TimerCounter";
import { useParams } from "react-router-dom";
import { useDonorContext } from "../../context/DonorContext";
import DonorAndGroupTabsDisplay from "../Main/DonorAndGroupTabsDisplay";
import ProgressAndClock from "../Progress/ProgressAndClock";
import YoutubeEmbed from "../Video/YoutubeEmbed";
import ButtomPayment from "../Payment/ButtomPayment";
import MainPayment from "../Payment/MainPayment";
import Banner from "../Banner/Banner";
import GroupCard from "./GroupCard"

function GroupPage() {
  const { groupId, groupName } = useParams();
  const [amount, setAmount] = useState(0);

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const {
    donors,
    loading: donorLoading,
    error: donorError,
    getDonorsByGroupId,
  } = useDonorContext();

  useEffect(() => {
    groupId && getDonorsByGroupId(groupId);
  }, [groupId]);

  return (
    <>
      {/* <GroupCard
        id={group._id}
        name={group.name}
        nameHebrew={group.nameHebrew}
        sumDonors={group.donorCount}
        goal={group.goal}
        totalDonorAmount={group.totalDonorAmount}
      /> */}
      
      <Banner />
      <MainPayment moked={groupName} />
      <Container maxWidth="md" className="pt-3">
        <ProgressAndClock />
        <div className="m-5"></div>
      </Container>
      <div>
        <DonorAndGroupTabsDisplay
          donors={donors}
          donorLoading={donorLoading}
          donorError={donorError}
        />
      </div>
      <ButtomPayment moked={groupName} />
    </>
  );
}

export default GroupPage;
