import DonorModel from '../model/donor.mjs';

// Create a new donor
const createDonor = async (req, res) => {
    try {
        const donorData = req.body;
        const donor = new DonorModel(donorData);
        const savedDonor = await donor.save();
        res.send(savedDonor);
    } catch (error) {
        console.error('Error creating donor:', error);
        res.status(500).json({ error: 'Failed to create donor' });
    }
};

// Get all donors
const getAllDonors = async (_req, res) => {
    try {
        const donors = await DonorModel.find();
        res.send(donors);
    } catch (error) {
        console.error('Error fetching donors:', error);
        res.status(500).json({ error: 'Failed to fetch donors' });
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

        const donor = await DonorModel.findByIdAndUpdate(donorId, donorData, { new: true });

        if (!donor) {
            res.status(404).json({ error: 'Donor not found' });
            return;
        }

        res.json(donor);
    } catch (error) {
        console.error('Error updating donor:', error);
        res.status(500).json({ error: 'Failed to update donor' });
    }
};

// Delete a donor
const deleteDonor = async (req, res) => {
    try {
        const donorId = req.params.id;
        const donor = await DonorModel.findByIdAndDelete(donorId);

        if (!donor) {
            res.status(404).json({ error: 'Donor not found' });
            return;
        }

        res.json(donor);
    } catch (error) {
        console.error('Error deleting donor:', error);
        res.status(500).json({ error: 'Failed to delete donor' });
    }
};

export default {
    createDonor,
    getAllDonors,
    getDonorById,
    updateDonor,
    deleteDonor
};
