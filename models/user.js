const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "The username is required"],
  },
  fullname: {
    type: String,
    required: [true, "The fullname is required"],
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
  role: {
    type: String,
    enum: ["STUDENT", "MODERATOR"],
    default: "STUDENT",
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

module.exports = model("Kuepa-User", UserSchema);
