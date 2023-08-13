import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import { useGroupContext } from "../../context/GroupContext";
import { Button, Modal } from "react-bootstrap";
import AddGroup from "./AddGroup";
import EditGroupForm from "./EditGroup";

export default function DisplayTableGroup() {
  const {
    groups,
    loading: groupLoading,
    error: groupError,
    deleteGroup,
  } = useGroupContext();

  const [showAddGroup, setShowAddGroup] = useState(false);
  const handleCloseAddGroup = () => setShowAddGroup(false);
  const handleShowAddGroup = () => setShowAddGroup(true);
  const [editedGroup, setEditedGroup] = useState(null);

  const handleDeleteGroup = (groupId) => {
    deleteGroup(groupId);
  };

  return (
    <>
      <Button onClick={handleShowAddGroup}>הוסף קבוצה</Button>
      <Modal show={showAddGroup} onHide={handleCloseAddGroup} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>הוסף קבוצה חדשה</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddGroup />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddGroup}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">שם הקבוצה בקשר (באנגלית) </TableCell>
              <TableCell align="right"> שם הקבוצה (בעברית)</TableCell>
              <TableCell align="right">מטרה</TableCell>
              <TableCell align="right">עריכה</TableCell>
              <TableCell align="right">מחיקה</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groupLoading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : groupError ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Error loading groups
                </TableCell>
              </TableRow>
            ) : (
              groups.map((group, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{group.name}</TableCell>
                  <TableCell align="right">{group.nameHebrew}</TableCell>
                  <TableCell align="right">{group.goal}</TableCell>
                  <TableCell align="right">
                    {editedGroup && editedGroup._id === group._id ? (
                      <Button
                        variant="link"
                        onClick={() => setEditedGroup(null)}
                      >
                        בטל
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        onClick={() => setEditedGroup(group)}
                      >
                        ערוך
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="link"
                      onClick={() => handleDeleteGroup(group._id)}
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
      {editedGroup && (
        <TableRow>
          <TableCell colSpan={5}>
            <EditGroupForm
              group={editedGroup}
              onCancel={() => setEditedGroup(null)}
            />
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
