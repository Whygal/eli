import React from "react";
import { Row, Col } from "react-bootstrap";
import MainProgress from "./MainProgress";
import CountdownTimer from "../Clock/TimerCounter";
import { useCampaignContext } from "../../context/CampaignContext";

function ProgressAndClock() {
  const { campaigns } = useCampaignContext();
  const endDate = Date.parse("2023-08-17T21:00:00.000Z");
  const now = new Date().getTime();
  const timeLeft = endDate - now;


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
