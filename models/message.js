const { Schema, model } = require("mongoose");

const MessageSchema = Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: Schema.Types.ObjectId,
      ref: "Kuepa-User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Kuepa-Message", MessageSchema);
