import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PaymentPage from "./PaymentPage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import bitImage from "../../images/bit.png";
import paypalImage from "../../images/paypal.png";
import cashAppImage from "../../images/cashApp.png";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import ShareLink from "../ShareLink/ShareLink";

export default function ButtomPayment({ moked }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openShareDrawer, setOpenShareDrawer] = useState(false) 
  return (
    <Box sx={{ paddingBottom: "80px" }}>
      {!show && (
        <AppBar
          position="fixed"
          sx={{ top: "auto", bottom: 0, backgroundColor: "#C9A140" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0px",
            }}
          >
            <Button
              size="sm"
              className="hoverBlue marginButton"
              style={{
                borderRadius: "50px",
                backgroundColor: "#C9A140",
                border: "1px solid #223f84",
                padding: "0 20px",
                height: "48px",
                fontSize: "16px",
              }}
            onClick={()=>setOpenShareDrawer(true)}
            >
              שתפו
            </Button>
            <Drawer 
             anchor={"bottom"} 
             open={openShareDrawer} 
             onClose={()=>setOpenShareDrawer(false)}>
              <ShareLink moked={moked}/>
            </Drawer>
            <Button
              size="sm"
              onClick={handleShow}
              className="hover-button marginButton"
              style={{
                backgroundColor: "#223f84",
                border: "1px solid #223f84",
                borderRadius: "50px",
                padding: "0 24px",
                height: "48px",
                fontSize: "16px",
              }}
            >
              תרומה
            </Button>

            <Link
              to={`https://meshulam.co.il/s/229a4182-b98c-d8fa-649d-698e46fb6364`}
              className="marginButton"
            >
              <img
                src={bitImage}
                style={{
                  borderRadius: "50%",
                  // padding: "0 24px",
                  height: "50px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              ></img>
            </Link>
            <Link
              to={`https://paypal.me/eliyahusingavy`}
              className="marginButton"
            >
              <img
                src={paypalImage}
                style={{
                  borderRadius: "50%",
                  padding: "0px",
                  height: "50px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              ></img>
            </Link>
            <Link to={`https://cash.app/$Elisingavy`} className="marginButton">
              <img
                src={cashAppImage}
                style={{
                  borderRadius: "50%",
                  // padding: "0px 20px",
                  height: "50px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              ></img>
            </Link>
          </Toolbar>
        </AppBar>
      )}
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <PaymentPage moked={moked} campaignId={"312806"} />
        </Modal.Body>
      </Modal>
    </Box>
  );
}
