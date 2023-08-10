import React, { useState } from "react";
import { Modal, Row, Col, Card, Container, Image } from "react-bootstrap";
import PaymentPage from "./PaymentPage";
import icon120 from "../../images/icon120.jpg";
import icon250 from "../../images/icon250.jpg";
import icon770 from "../../images/icon770.jpg";
import "./Payment.css";
import About from "../About/About";

export default function MainPayment({ moked }) {
  const [show, setShow] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [campaignNum, setCampaignNum] = useState("312806");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePayment = (campaignId) => {
    setCampaignNum(campaignId);
    setShow(true);
  };

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  const plans = [
    {
      name: "שותף",
      image: icon120,
      price: "₪120 לחודש",
      description: "120*12 חודשים",
      campaignId: "312736",
    },
    {
      name: "מאיר",
      image: icon250,
      price: "₪250 לחודש",
      description: "250*12 חודשים",
      campaignId: "312763",
    },
    {
      name: "מהפכן",
      image: icon770,
      price: "₪770 לחודש",
      description: "770*12 חודשים",
      campaignId: "312764",
    },
  ];

  return (
    <div>
      <div
        className="mb-0"
        style={{ backgroundColor: "#F5E283", height: "10px" }}
      ></div>
      <Row className="rlt mt-0 pt-0" style={{ backgroundColor: "#C9A140" }}>
        <p
          className="text-center about-text-container"
          onClick={handleShowAbout}
        >
          <span className="about-text pt-1 pb-2 m-0"> אודות הקמפיין</span>
        </p>
        <Container className="d-flex justify-content-center mt-0 pt-0">
          {plans.map((plan, index) => (
            <Card
              className="card-payment mt-0 pt-0"
              key={index}
              style={{ backgroundColor: "#C9A140" }}
            >
              <Card.Body className="">
                <div
                  className="d-flex flex-column align-items-center card-payment p"
                  style={{ width: "170.8px" }}
                  onClick={() => handlePayment(plan.campaignId)}
                >
                  <div
                    className="rounded-circle border mb-2"
                    style={{
                      width: "70px",
                      height: "70px",
                      textAlign: "center",
                    }}
                  >
                    <Image
                      src={plan.image}
                      roundedCircle
                      width={"70px"}
                      className="border"
                    />
                  </div>
                  <div className="d-flex flex-column align-items-center text-white">
                    <span className="border-bottom w-100 text-white text-center pb-1">
                      {plan.name}
                    </span>
                    <span
                      style={{ fontWeight: 100 }}
                      className="d-flex flex-column align-items-center "
                    >
                      <span>{plan.price}</span>
                      <small>{plan.description}</small>
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Row>

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <PaymentPage moked={moked} campaignId={campaignNum} />
        </Modal.Body>
      </Modal>

      <Modal show={showAbout} onHide={handleCloseAbout} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <About />
        </Modal.Body>
      </Modal>
    </div>
  );
}
