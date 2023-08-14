import DonorModel from "../model/donor.mjs";
import GroupModel from "../model/group.mjs";

// Create a new donor
const createDonor = async (req, res) => {
  try {
    const donorData = req.body;
    const donor = new DonorModel(donorData);
    const savedDonor = await donor.save();
    await GroupModel.findByIdAndUpdate(
      { _id: savedDonor.group },
      { $push: { donors: savedDonor._id } }
    );
    res.send(savedDonor);
  } catch (error) {
    console.error("Error creating donor:", error);
    res.status(500).json({ error: "Failed to create donor" });
  }
};

// Get all donors
// Get donors with dynamic sorting, limit, and ability to get more donors
const getAllDonors = async (req, res) => {
  try {
    const { sortBy = "date", sortOrder = "desc", pageNumber = 0 } = req.query;
    const limit = 15;
    let sortOptions = {};
    if (sortBy === "date") {
      sortOptions.date = sortOrder === "asc" ? 1 : -1;
    } else if (sortBy === "amount") {
      sortOptions.amount = sortOrder === "asc" ? 1 : -1;
    }
console.log(pageNumber, limit, sortOptions);
    const donorsQuery = DonorModel.find()
      .populate("group")
      .sort(sortOptions)
      .skip(Number(pageNumber * limit))
      .limit(Number(limit));

    const donors = await donorsQuery.exec();

    const totalDonorsCount = await DonorModel.countDocuments();
    const totalAmountDonated = await DonorModel.aggregate([
      { $group: { _id: null, totalAmount: { $sum: "$amount" } } },
    ]);

    res.send({
      donors,
      totalCount: totalDonorsCount,
      totalAmountDonated:
        totalAmountDonated.length > 0 ? totalAmountDonated[0].totalAmount : 0,
    });
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ error: "Failed to fetch donors" });
  }
};

// Get sum of all donor amounts
const geSumOfAllDonorAmount = async (req, res) => {
  try {
    const result = await DonorModel.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);
    if (result.length > 0) {
      res.json({ totalAmount: result[0].totalAmount });
    } else {
      res.json({ totalAmount: 0 });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch totalAmount" });
  }
};

// Get donors by group id
const getDonorsByGroupId = async (req, res) => {
  try {
    const groupId = req.params.id;
    const donors = await DonorModel.find({ group: groupId }).populate("group").sort({ date: -1 });
    res.send(donors);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch donors" });
  }
};

// Get a donor by ID
const getDonorById = async (id) => {
  try {
    const donor = await DonorModel.findById(id);
    return donor;
  } catch (error) {
    throw error;
  }
};

// Update a donor
const updateDonor = async (req, res) => {
  try {
    const donorId = req.params.id;
    const donorData = req.body;
    const donor = await DonorModel.findByIdAndUpdate(donorId, donorData, {
      new: true,
    });
    if (!donor) {
      res.status(404).json({ error: "Donor not found" });
      return;
    }
    res.json(donor);
  } catch (error) {
    console.error("Error updating donor:", error);
    res.status(500).json({ error: "Failed to update donor" });
  }
};

// Delete a donor
const deleteDonor = async (req, res) => {
  try {
    const donorId = req.params.id;
    const donor = await DonorModel.findByIdAndDelete(donorId);
    if (!donor) {
      res.status(404).json({ error: "Donor not found" });
      return;
    }
    res.json(donor);
  } catch (error) {
    console.error("Error deleting donor:", error);
    res.status(500).json({ error: "Failed to delete donor" });
  }
};

export default {
  createDonor,
  getAllDonors,
  geSumOfAllDonorAmount,
  getDonorsByGroupId,
  getDonorById,
  updateDonor,
  deleteDonor,
};
