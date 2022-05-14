import pkg from "mongoose";
const { model, Schema } = pkg;

const HistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    phrases: [
      {
        type: Schema.Types.ObjectId,
        ref: "Phrase",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("History", HistorySchema);
