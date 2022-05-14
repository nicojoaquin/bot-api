import pkg from "mongoose";
const { model, Schema } = pkg;

const UsernSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    history: {
      type: Schema.Types.ObjectId,
      ref: "History",
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

export default model("User", UsernSchema);
