import React, { useState } from "react";
import { useDonorContext } from "../../context/DonorContext";
import { useGroupContext } from "../../context/GroupContext";
import { Button, Form } from "react-bootstrap";

export default function AddDonor() {
  const { addDonor } = useDonorContext();
  const { groups } = useGroupContext();

  const [donorName, setDonorName] = useState("");
  const [donorAmount, setDonorAmount] = useState("");
  const [donorComment, setDonorComment] = useState("");
  const [donorGroup, setDonorGroup] = useState("");
  const [formError, setFormError] = useState(""); 

  const handleCreateDonor = () => {
    if (!donorName || !donorAmount || !donorGroup) {
      setFormError("יש למלא את כל השדות החובה");
      return;
    }

    const newDonor = {
      name: donorName,
      amount: donorAmount,
      comment: donorComment,
      group: donorGroup,
    };

    addDonor(newDonor);
    setDonorName("");
    setDonorAmount("");
    setDonorComment("");
    setDonorGroup("");
    setFormError(""); // Clear form-level error after successful submission
  };

  return (
    <div className="rlt">
      <h2>הוסף תורם</h2>
      {formError && <p style={{ color: "red" }}>{formError}</p>}
      <Form.Group>
        <Form.Label>*שם התורם</Form.Label>
        <Form.Control
          type="text"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>*סכום התרומה</Form.Label>
        <Form.Control
          type="number"
          value={donorAmount}
          onChange={(e) => setDonorAmount(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label> הקדשה</Form.Label>
        <Form.Control
          type="text"
          value={donorComment}
          onChange={(e) => setDonorComment(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>*בחר קבוצה</Form.Label>
        <Form.Select
          value={donorGroup}
          onChange={(e) => setDonorGroup(e.target.value)}
          required
        >
          <option value="">בחר קבוצה</option>
          {groups.map((group) => (
            <option key={group._id} value={group._id}>
              {group.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button onClick={handleCreateDonor}>הוסף תורם</Button>
    </div>
  );
}
