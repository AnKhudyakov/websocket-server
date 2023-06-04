import { validationResult } from "express-validator";
import AuthService from "../AuthService.js";

class RegController {
  async regUser(req, res) {
    try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        const user = await AuthService.getUserByName(req.body.name);
        if (!user) {
          await AuthService.createUser(req.body);
          return res.status(200).json({ message: "User was created" });
        } else {
          return res.status(200).json({ message: "User already exist" });
        }
      }
      return res
        .status(400)
        .json({ message: "Incorrect request", errors: result });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Server error" });
    }
  }
}

export default new RegController();
