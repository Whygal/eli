import React, { useState } from "react";
import { useGroupContext } from "../../context/GroupContext";
import { Button, Form } from "react-bootstrap";

export default function AddGroup() {
  const { createGroup } = useGroupContext();

  const [groupName, setGroupName] = useState("");
  const [groupGoal, setGroupGoal] = useState("");
  const [groupNameHebrew, setGroupNameHebrew] = useState("");

  const handleCreateGroup = () => {
    const newGroup = {
      name: groupName,
      nameHebrew: groupNameHebrew,
      goal: groupGoal,
    };

    createGroup(newGroup);
    setGroupName("");
    setGroupNameHebrew("");
    setGroupGoal("");
  };

  return (
    <div className="rlt">
      <h2>הוסף קבוצה חדשה</h2>
      <Form.Group>
        <Form.Label>שם הקבוצה בקשר(אנגלית)</Form.Label>
        <Form.Control
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>שם הקבוצה בעברית</Form.Label>
        <Form.Control
          type="text"
          value={groupNameHebrew}
          onChange={(e) => setGroupNameHebrew(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label> יעד (בשקלים) </Form.Label>
        <Form.Control
          type="number"
          value={groupGoal}
          onChange={(e) => setGroupGoal(e.target.value)}
        />
      </Form.Group>
      <Button onClick={handleCreateGroup}>הוסף קבוצה</Button>
    </div>
  );
}
