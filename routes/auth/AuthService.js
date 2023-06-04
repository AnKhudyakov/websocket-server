import User from "../../models/User.js";

class AuthService {
  async createUser(user) {
    const newUser = new User({
      name: user.name,
    });
    await newUser.save();
  }
  async getUserByName(name) {
    return await User.findOne({ name });
  }
}

export default new AuthService();
