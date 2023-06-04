import User from "../../models/User.js";

class UserService {
  async getAllUsers() {
    return await User.find({}).select({ password: 0 });
  }
}

export default new UserService();
