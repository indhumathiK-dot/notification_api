import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  id: {
    type: String,
    default: null,
  },
  notification: {
    type: Array,
    default: [
      { type: "Info", message: "Big sale next week" },
      { type: "Info", message: "New auction next month" },
      { type: "Warning", message: "Limited edition books for next auction" },
      { type: "Success", message: "New books with limited edition coming next week" },
      { type: "Error", message: "Last items with limited time offer" },
    ],
  },
});

const Users = mongoose.model("users", UsersSchema);

export default Users;
