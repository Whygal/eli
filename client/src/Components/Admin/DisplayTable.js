import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { useDonorContext } from "../../context/DonorContext";
import { useGroupContext } from "../../context/GroupContext";
import { Button, Modal } from "react-bootstrap";
import AddDonor from "./AddDonor";

export default function DisplayTable() {
  const {
    donors,
    loading: donorLoading,
    error: donorError,
    fetchData,
  } = useDonorContext();

  useEffect(() => {
    fetchData();
  }, []);

   const [showAddDonor, setShowAddDonor] = useState(false);
   const handleCloseAddDonor = () => setShowAddDonor(false);
   const handleShowAddDonor = () => setShowAddDonor(true);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">שם התורם</TableCell>
              <TableCell align="right"> סכום התרומה</TableCell>
              <TableCell align="right">תאריך</TableCell>
              <TableCell align="right">שייך לקבוצה</TableCell>
              <TableCell align="right">עריכה</TableCell>
              <TableCell align="right">מחיקה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donors ? (
              donors.map((donor, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{donor.name}</TableCell>
                  <TableCell align="right">{donor.amount}</TableCell>
                  <TableCell align="right">{donor.date}</TableCell>
                  <TableCell align="right">{donor.group?.name}</TableCell>
                  <TableCell align="right">{"ערוך"}</TableCell>
                  <TableCell align="right">{"מחק"}</TableCell>
                </TableRow>
              ))
            ) : (
              <CircularProgress />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleShowAddDonor}>הוסף תורם</Button>
      <Modal show={showAddDonor} onHide={handleCloseAddDonor} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>הוסף תורם חדש</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddDonor/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddDonor}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
