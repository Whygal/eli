import mongoose from 'mongoose';

const { Schema } = mongoose;

const AmbassadorSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    targetAmount: {
        type: Number,
        required: true,
    },
    donors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donor',
    }],
    date: {
        type: Date,
        default: Date.now,
    },
});

const AmbassadorModel = mongoose.model('Ambassador', AmbassadorSchema);

export default AmbassadorModel;
