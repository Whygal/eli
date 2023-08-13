import React, { useState, useEffect } from "react";
import { useDonorContext } from "../../context/DonorContext";
import { useGroupContext } from "../../context/GroupContext";
import DonorAndGroupTabsDisplay from "./DonorAndGroupTabsDisplay";
import { Container } from "@mui/material";
import ProgressAndClock from "../Progress/ProgressAndClock";
import YoutubeEmbed from "../Video/YoutubeEmbed";
import Banner from "../Banner/Banner";
import MainPayment from "../Payment/MainPayment";
import ButtomPayment from "../Payment/ButtomPayment";

function MainPage() {
  const {
    donors,
    loading: donorLoading,
    error: donorError,
    fetchData,
  } = useDonorContext();
  const {
    groups,
    loading: groupLoading,
    error: groupError,
  } = useGroupContext();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <MainPayment />
      <Container maxWidth="md" className="pt-3">
        <ProgressAndClock />
        <div className="m-5"></div>
      </Container>
      <DonorAndGroupTabsDisplay
        donors={donors}
        groups={groups}
        donorLoading={donorLoading}
        donorError={donorError}
        groupLoading={groupLoading}
        groupError={groupError}
      />
      <ButtomPayment />
    </>
  );
}

export default MainPage;
