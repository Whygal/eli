import GroupModel from "../model/group.mjs";

// Create a new group
const createGroup = async (req, res) => {
  try {
    console.log("here");
    const groupData = req.body;
    const group = new GroupModel(groupData);
    const savedGroup = await group.save();
    res.send(savedGroup);
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ error: "Failed to create group" });
  }
};

const getAllGroups = async (req, res) => {
  try {
    const groups = await GroupModel.aggregate([
      {
        $lookup: {
          from: "donors",
          localField: "_id",
          foreignField: "group",
          as: "donors",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          nameHebrew: 1,
          goal: 1,
          donorCount: { $size: "$donors" },
          totalDonorAmount: { $sum: "$donors.amount" },
        },
      },
    ]);
    res.json(groups);
  } catch (error) {
    console.error("Error fetching groups:", error);
    res.status(500).json({ error: "Failed to fetch groups" });
  }
};

// Get an group by ID
const getGroupById = async (req, res) => {
  try {
    const groupId = req.params.id;
    const group = await GroupModel.findById(groupId);
    if (!group) {
      res.status(404).json({ error: "Group not found" });
      return;
    }
    res.json(group);
  } catch (error) {
    console.error("Error fetching group:", error);
    res.status(500).json({ error: "Failed to fetch group" });
  }
};

// Update an group
const updateGroup = async (req, res) => {
  try {
    const groupId = req.params.id;
    const updateData = req.body;
    const updatedGroup = await GroupModel.findByIdAndUpdate(
      groupId,
      updateData,
      { new: true }
    );
    if (!updatedGroup) {
      res.status(404).json({ error: "Group not found" });
      return;
    }
    res.json(updatedGroup);
  } catch (error) {
    console.error("Error updating group:", error);
    res.status(500).json({ error: "Failed to update group" });
  }
};

// Delete an group
const deleteGroup = async (req, res) => {
  try {
    const groupId = req.params.id;
    const deletedGroup = await GroupModel.findByIdAndDelete(groupId);
    if (!deletedGroup) {
      res.status(404).json({ error: "Group not found" });
      return;
    }
    res.json(deletedGroup);
  } catch (error) {
    console.error("Error deleting group:", error);
    res.status(500).json({ error: "Failed to delete group" });
  }
};

export default {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
};
