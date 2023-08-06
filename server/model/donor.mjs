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
        required: true,
        enum: ['USD', 'ILS']
    },
    ambassador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ambassador'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const DonorModel = mongoose.model('Donor', DonorSchema);

export default DonorModel;
