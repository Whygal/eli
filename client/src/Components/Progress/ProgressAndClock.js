import React from "react";
import { Row, Col } from "react-bootstrap";
import MainProgress from "./MainProgress";
import CountdownTimer from "../Clock/TimerCounter";
import { useCampaignContext } from "../../context/CampaignContext";

function ProgressAndClock() {
  const { campaigns } = useCampaignContext();
  // Check if campaigns and campaigns.endDate are defined before accessing properties
  if (!campaigns || !campaigns.endDate) {
    return null; // or display a loading message
  }

  const endDate = new Date(campaigns.endDate);
  const now = new Date().getTime();
  const timeLeft = endDate.getTime() - now;

  return (
    <>
      <Row className="">
        <Col
          md="12"
          lg={6}
          className="text-center border-bottom mt-5"
          style={{ paddingBottom: "50px" }}
        >
          <CountdownTimer targetTime={timeLeft} />
        </Col>
        <Col
          md="12"
          lg={6}
          className="border-start border-light-subtle text-center border-bottom mt-5"
          style={{ paddingBottom: "50px" }}
        >
          <MainProgress percentage={10} />
        </Col>
      </Row>
    </>
  );
}

export default ProgressAndClock;
