import pkg from "mongoose";
const { model, Schema } = pkg;

const PhrasesSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Phrase", PhrasesSchema);

// export default Dylan;
