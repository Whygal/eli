import React, { useState } from "react";
import { useGroupContext } from "../../context/GroupContext";
import { useDonorContext } from "../../context/DonorContext";

export default function EditGroupForm({ donor, onCancel }) {
  const { updateDonor } = useDonorContext();
  const { groups } = useGroupContext();
  const [editedName, setEditedName] = useState(donor.name);
  const [editedAmount, setEditedAmount] = useState(donor.amount);
  const [editedGroup, setEditedGroup] = useState(donor.group);
  const [editedCommit, setEditedCommit] = useState(donor.commit);

  const handleSave = () => {
    const updatedData = {
      name: editedName,
      amount: editedAmount,
      commit: editedCommit,
      group: editedGroup,
    };
    updateGroup(donor._id, updatedData);
    onCancel();
  };

  return (
    <div>
      <input
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <input
        type="text"
        value={editedGoal}
        onChange={(e) => setEditedGoal(e.target.value)}
      />
      <input
        type="text"
        value={editedCommit}
        onChange={(e) => setEditedCommit(e.target.value)}
      />
      <select
        value={editedGroup}
        onChange={(e) => setEditedGroup(e.target.value)}
      >
        {groups.map((group) => (
          <option key={group._id} value={donor?.group?.name}>
            {group.name}
          </option>
        ))}
      </select>

      <button onClick={handleSave}>שמור שינויים</button>
      <button onClick={onCancel}>בטל</button>
    </div>
  );
}
