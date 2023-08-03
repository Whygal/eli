import mongoose, { Schema, Document } from 'mongoose';

export interface IDonor extends Document {
    name: string;
    amount: number;
    currency: 'USD' | 'ILS';
    ambassador: mongoose.Schema.Types.ObjectId;
    date: Date;
}

const DonorSchema: Schema = new Schema({
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

const DonorModel = mongoose.model<IDonor>('Donor', DonorSchema);

export default DonorModel;
