import AmbassadorModel, { IAmbassador } from '../model/ambassador';
import { Request, Response } from 'express';

// Create a new ambassador
const createAmbassador = async (req: Request, res: Response): Promise<void> => {
    try {
        const ambassadorData: IAmbassador = req.body;
        const ambassador = new AmbassadorModel(ambassadorData);
        const savedAmbassador = await ambassador.save();
        res.send(savedAmbassador);
    } catch (error) {
        console.error('Error creating ambassador:', error);
        res.status(500).json({ error: 'Failed to create ambassador' }); 
    }
};

// Get all ambassadors
const getAllAmbassadors = async (req: Request, res: Response): Promise<void> => {
    try {
        const ambassadors = await AmbassadorModel.find();
        res.json(ambassadors);
    } catch (error) {
        console.error('Error fetching ambassadors:', error);
        res.status(500).json({ error: 'Failed to fetch ambassadors' });
    }
};

// Get an ambassador by ID
const getAmbassadorById = async (req: Request, res: Response): Promise<void> => {
    try {
        const ambassadorId = req.params.id;
        const ambassador = await AmbassadorModel.findById(ambassadorId);

        if (!ambassador) {
            res.status(404).json({ error: 'Ambassador not found' });
            return;
        }

        res.json(ambassador);
    } catch (error) {
        console.error('Error fetching ambassador:', error);
        res.status(500).json({ error: 'Failed to fetch ambassador' });
    }
};

// Update an ambassador
const updateAmbassador = async (req: Request, res: Response): Promise<void> => {
    try {
        const ambassadorId = req.params.id;
        const updateData: Partial<IAmbassador> = req.body;

        const updatedAmbassador = await AmbassadorModel.findByIdAndUpdate(
            ambassadorId,
            updateData,
            { new: true }
        );

        if (!updatedAmbassador) {
            res.status(404).json({ error: 'Ambassador not found' });
            return;
        }

        res.json(updatedAmbassador);
    } catch (error) {
        console.error('Error updating ambassador:', error);
        res.status(500).json({ error: 'Failed to update ambassador' });
    }
};

// Delete an ambassador
const deleteAmbassador = async (req: Request, res: Response): Promise<void> => {
    try {
        const ambassadorId = req.params.id;
        const deletedAmbassador = await AmbassadorModel.findByIdAndDelete(ambassadorId);

        if (!deletedAmbassador) {
            res.status(404).json({ error: 'Ambassador not found' });
            return;
        }

        res.json(deletedAmbassador);
    } catch (error) {
        console.error('Error deleting ambassador:', error);
        res.status(500).json({ error: 'Failed to delete ambassador' });
    }
};

export default {
    createAmbassador,
    getAllAmbassadors,
    getAmbassadorById,
    updateAmbassador,
    deleteAmbassador
};
