import React, { useState } from "react";
import { useCampaignContext } from "../../context/CampaignContext";
import { Button, Form } from "react-bootstrap";

export default function CampaignDetails() {
  const { campaigns, updateCampaign } = useCampaignContext();

  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedGoal, setUpdatedGoal] = useState("");
  const [updatedStartDate, setUpdatedStartDate] = useState("");
  const [updatedEndDate, setUpdatedEndDate] = useState("");

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
        </div>
      )}
    </div>
  );
}
