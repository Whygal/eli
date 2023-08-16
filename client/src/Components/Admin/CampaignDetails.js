import React, { useState } from "react";
import { useCampaignContext } from "../../context/CampaignContext";
import { useDonorContext } from "../../context/DonorContext";
import { useGroupContext } from "../../context/GroupContext";
import { Button, Form } from "react-bootstrap";

export const formatDate = (date) => {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

export default function CampaignDetails() {
  const { campaigns, updateCampaign } = useCampaignContext();
  const { fetchDonorsForExcel } = useDonorContext();
  const { fetchGroupsForExcel } = useGroupContext();

  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedGoal, setUpdatedGoal] = useState("");
  const [updatedStartDate, setUpdatedStartDate] = useState("");
  const [updatedEndDate, setUpdatedEndDate] = useState("");

  const handleClick = () => {
    setUpdatedName(campaigns.name);
    setUpdatedGoal(campaigns.goal);
    setUpdatedStartDate(campaigns.startDate);
    setUpdatedEndDate(campaigns.endDate);
    setEditing(true);
  };

  const handleUpdate = () => {
    const updatedData = {
      name: updatedName ?? campaigns.name,
      goal: updatedGoal ?? campaigns.goal,
      startDate: updatedStartDate ?? campaigns.startDate,
      endDate: updatedEndDate ?? campaigns.endDate,
    };
    console.log(updatedData, campaigns._id);

    updateCampaign(campaigns._id, updatedData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className="">
      <h1>פרטי הקמפיין</h1>
      {editing ? (
        <div>
          <Form.Group>
            <Form.Label>שם הקמפיין</Form.Label>
            <Form.Control
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>יעד</Form.Label>
            <Form.Control
              type="text"
              value={updatedGoal}
              onChange={(e) => setUpdatedGoal(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>תאריך התחלה</Form.Label>
            <Form.Control
              type="date"
              value={updatedStartDate}
              onChange={(e) => setUpdatedStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>תאריך סיום</Form.Label>
            <Form.Control
              type="date"
              value={updatedEndDate}
              onChange={(e) => setUpdatedEndDate(e.target.value)}
            />
          </Form.Group>
          <Button onClick={handleUpdate}>שמור שינויים</Button>
          <Button variant="secondary" onClick={handleCancel}>
            בטל
          </Button>
        </div>
      ) : (
        <div>
          <Button onClick={handleClick}>ערוך</Button>
          <p>שם הקמפיין: {campaigns.name}</p>
          <p>יעד: {campaigns.goal}</p>
          <p>תאריך התחלה: {formatDate(campaigns.startDate)}</p>
          <p>תאריך סיום: {formatDate(campaigns.endDate)}</p>
          <Button variant="success" onClick={fetchDonorsForExcel}>
            הורד תורמים לאקסל
          </Button>
          <Button
            variant="warning"
            className="mx-3"
            onClick={fetchGroupsForExcel}
          >
            הורד קבוצות לאקסל
          </Button>
        </div>
      )}
    </div>
  );
}
