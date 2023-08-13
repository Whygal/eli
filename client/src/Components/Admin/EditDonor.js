import React, { useState } from "react";
import { useGroupContext } from "../../context/GroupContext";
import { useDonorContext } from "../../context/DonorContext";
import { Form } from "react-bootstrap"; // Import Form from react-bootstrap

export default function EditGroupForm({ donor, onCancel }) {
  const { updateDonor } = useDonorContext();
  const { groups } = useGroupContext();
  const [editedName, setEditedName] = useState(donor.name);
  const [editedAmount, setEditedAmount] = useState(donor.amount);
  const [editedGroup, setEditedGroup] = useState(donor.group);
  const [editedCommit, setEditedCommit] = useState(donor.comment);
  const [editedPaymentMethod, setPaymentMethod] = useState(donor.paymentMethod);

  const handleSave = () => {
    const updatedData = {
      name: editedName,
      amount: editedAmount,
      comment: editedCommit,
      group: editedGroup,
      paymentMethod:editedPaymentMethod,
    };
    updateDonor(donor._id, updatedData);
    onCancel();
  };

  return (
    <Form.Group className="rlt">
      <Form.Label>שם התורם</Form.Label>
      <Form.Control
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <Form.Label>סכום</Form.Label>
      <Form.Control
        type="text"
        value={editedAmount}
        onChange={(e) => setEditedAmount(e.target.value)}
      />
      <Form.Label>הקדשה</Form.Label>
      <Form.Control
        type="text"
        value={editedCommit}
        onChange={(e) => setEditedCommit(e.target.value)}
      />
      <Form.Label>קבוצה</Form.Label>
      <p> {donor.group.name}</p>

      <Form.Select
        value={editedGroup}
        onChange={(e) => setEditedGroup(e.target.value)}
      >
        {groups.map((group) => (
          <option key={group._id} value={donor?.group?.name}>
            {group.name}
          </option>
        ))}
      </Form.Select>
      <Form.Label>אמצעי תשלום</Form.Label>
      <Form.Control
        type="text"
        value={editedPaymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <button onClick={handleSave}>שמור שינויים</button>
      <button onClick={onCancel}>בטל</button>
    </Form.Group>
  );
}
