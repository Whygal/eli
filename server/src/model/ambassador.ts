import mongoose, { Schema, Document } from 'mongoose';

export interface IAmbassador extends Document {
    name: string;
    targetAmount: number;
    donors: mongoose.Schema.Types.ObjectId[];
    date: Date;
}

const AmbassadorSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    targetAmount: {
        type: Number,
        required: true,
    },
    donors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donor'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const AmbassadorModel = mongoose.model<IAmbassador>('Ambassador', AmbassadorSchema);

export default AmbassadorModel;
