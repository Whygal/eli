import mongoose from 'mongoose';

const { Schema } = mongoose;

const DonorSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        default: 'ILS'
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const DonorModel = mongoose.model('Donor', DonorSchema);

export default DonorModel;
