import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { useDonorContext } from "../../context/DonorContext";
import { Button, Modal } from "react-bootstrap";
import AddDonor from "./AddDonor";
import EditDonorForm from "./EditDonor";
import { formatDate } from "./CampaignDetails";
import Pagination from "react-bootstrap/Pagination";

export default function DisplayTableDonor() {
  const {
    donors,
    loading: donorLoading,
    error: donorError,
    deleteDonor,
    fetchSortedAndLimitedDonors,
    totalDonors,
  } = useDonorContext();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15; // Number of items to display per page
  const totalPages = Math.ceil(totalDonors / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDonors = donors?.slice(startIndex, endIndex);

  useEffect(() => {
    fetchSortedAndLimitedDonors("date", "desc", currentPage);
  }, [currentPage]);

  const [showAddDonor, setShowAddDonor] = useState(false);
  const handleCloseAddDonor = () => setShowAddDonor(false);
  const handleShowAddDonor = () => setShowAddDonor(true);
  const [editedDonor, setEditedDonor] = useState(null);

  const handleDeleteDonor = (donorId) => {
    deleteDonor(donorId);
  };

  return (
    <>
      <Button onClick={handleShowAddDonor}>הוסף תורם</Button>
      <Modal show={showAddDonor} onHide={handleCloseAddDonor} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>הוסף תורם חדש</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddDonor />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddDonor}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">שם התורם</TableCell>
              <TableCell align="right"> סכום</TableCell>
              <TableCell align="right">קבוצה</TableCell>
              <TableCell align="right">הקדשה</TableCell>
              <TableCell align="right">תאריך</TableCell>
              <TableCell align="right">אמצעי תשלום</TableCell>
              <TableCell align="right">עריכה</TableCell>
              <TableCell align="right">מחיקה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donorLoading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : donorError ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  Error loading donors
                </TableCell>
              </TableRow>
            ) : (
              donors &&
              donors.length > 0 && donors.map((donor, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{donor.name}</TableCell>
                  <TableCell align="right">
                    {Number(donor.amount).toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    {donor?.group?.nameHebrew}
                  </TableCell>
                  <TableCell align="right">{donor.comment}</TableCell>
                  <TableCell align="right">{formatDate(donor.date)}</TableCell>
                  <TableCell align="right">{donor.paymentMethod}</TableCell>
                  <TableCell align="right">
                    {editedDonor && editedDonor._id === donor._id ? (
                      <Button
                        variant="link"
                        onClick={() => setEditedDonor(null)}
                      >
                        בטל
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        onClick={() => setEditedDonor(donor)}
                      >
                        ערוך
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="link"
                      onClick={() => handleDeleteDonor(donor._id)}
                    >
                      מחק
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index === currentPage}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      {editedDonor && (
        <TableRow>
          <TableCell colSpan={5}>
            <EditDonorForm
              donor={editedDonor}
              onCancel={() => setEditedDonor(null)}
            />
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
