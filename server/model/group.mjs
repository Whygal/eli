import mongoose from "mongoose";

const { Schema } = mongoose;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  nameHebrew: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  goal: {
    type: Number,
    required: true,
  },
  donors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donor",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const GroupModel = mongoose.model("Group", GroupSchema);

export default GroupModel;
