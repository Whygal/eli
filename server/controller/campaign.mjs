import CampaignModel from '../model/campaign.mjs';

// Create a new campaign
const createCampaign = async (req, res) => {
    try {
        const newCampaign = new CampaignModel({
            name: 'קמפיין מרכז ההתגלות',
            goal: 300000,
            startDate: new Date('2023-08-13'),
            endDate: new Date('2023-08-17'),
        });

        await newCampaign.save(); 
        res.status(201).json(newCampaign);
    } catch (error) {
        console.error('Error creating campaign:', error);
        res.status(500).json({ error: 'Failed to create campaign' });
    }
};

// Fetch all campaigns
const getCampaigns = async (req, res) => {
    try {
        const campaigns = await CampaignModel.find(); 
        res.json(campaigns);
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        res.status(500).json({ error: 'Failed to fetch campaigns' });
    }
};

// Fetch a specific campaign
const getCampaign = async (req, res) => {
    try {
        const campaignId = req.params.id;
        const campaign = await CampaignModel.findById(campaignId);
        if (!campaign) {
            res.status(404).json({ error: 'Campaign not found' });
            return;
        }
        res.json(campaign);
    } catch (error) {
        console.error('Error fetching campaign:', error);
        res.status(500).json({ error: 'Failed to fetch campaign' });
    }
};

// Update a campaign
const updateCampaign = async (req, res) => {
    try {
        const campaignId = req.params.id;
        const updatedData = req.body;
        const campaign = await CampaignModel.findByIdAndUpdate(campaignId, updatedData, { new: true });
        if (!campaign) {
            res.status(404).json({ error: 'Campaign not found' });
            return;
        }
        res.json(campaign);
    } catch (error) {
        console.error('Error updating campaign:', error);
        res.status(500).json({ error: 'Failed to update campaign' });
    }
};

export default {
    createCampaign,
    getCampaigns,
    getCampaign,
    updateCampaign,
};
