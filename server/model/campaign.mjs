import mongoose from 'mongoose';

const { Schema } = mongoose;


const CampaignSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    goal: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
});

const CampaignModel = mongoose.model('Campaign', CampaignSchema);

export default CampaignModel;
