import React, { useState } from "react";
import { useGroupContext } from "../../context/GroupContext";

export default function EditGroupForm({ group, onCancel }) {
  const { updateGroup } = useGroupContext();
  const [editedName, setEditedName] = useState(group.name);
  const [editedGoal, setEditedGoal] = useState(group.goal);
  const [editedNameHebrew, setEditedNameHebrew] = useState(group.nameHebrew);

  const handleSave = () => {
    const updatedData = {
      name: editedName,
      nameHebrew: editedNameHebrew,
      goal: editedGoal,
    };
    updateGroup(group._id, updatedData);
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
        value={editedNameHebrew}
        onChange={(e) => setEditedNameHebrew(e.target.value)}
      />
      <input
        type="text"
        value={editedGoal}
        onChange={(e) => setEditedGoal(e.target.value)}
      />
      <button onClick={handleSave}>שמור שינויים</button>
      <button onClick={onCancel}>בטל</button>
    </div>
  );
}
