import React, { useState, useEffect } from "react";
import { FormControl, Stack, Container } from "@mui/material";
import Button from "@mui/material/Button";
import CountdownTimer from "../Clock/TimerCounter";
import { Link, useParams } from "react-router-dom";
import { useDonorContext } from "../../context/DonorContext";
import { useGroupContext } from "../../context/GroupContext";
import DonorForGroup from "../Group/DonorForGroup";
import ProgressAndClock from "../Progress/ProgressAndClock";
import YoutubeEmbed from "../Video/YoutubeEmbed";
import ButtomPayment from "../Payment/ButtomPayment";
import MainPayment from "../Payment/MainPayment";
import Banner from "../Banner/Banner";
import GroupCard from "./GroupCard";

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

  const {
    group,
    loading: groupLoading,
    error: groupError,
    getGroupByID,
  } = useGroupContext();

  useEffect(() => {
    if (groupId) {
      getDonorsByGroupId(groupId);
      getGroupByID(groupId);
    }
  }, [groupId]);

  return (
    <>
      <div className="pt-3">
        <GroupCard
          id={group._id}
          name={group.name}
          nameHebrew={group.nameHebrew}
          sumDonors={group.donorCount}
          goal={group.goal}
          totalDonorAmount={group.totalDonorAmount}
        />
      </div>
      <div
        className="m-0 text-center rlt pb-2 pt-1"
        style={{
          backgroundColor: "#223f84",
          height: "30px",
          color: "white",
          fontSize: "13px",
        }}
      >
        <p className="">
          דף הקבוצה של {group?.nameHebrew}
          <Link to="/" style={{ textDecoration: "none !important" }}>
            <span
              className="text-white p-1"
              style={{
                backgroundColor: "#132347",
                textDecoration: "none !important",
              }}
            >
              לחץ לקמפיין הראשי
            </span>
          </Link>
        </p>
      </div>
      <Banner />
      <MainPayment moked={groupName} />
      <Container maxWidth="md" className="pt-3">
        <ProgressAndClock />
        <div className="m-5"></div>
      </Container>
      <div>
        <DonorForGroup
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
