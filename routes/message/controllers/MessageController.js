import MessageService from "../MessageService.js";

class MessageController {
  async getMessages(req, res) {
    try {
      const messages = await MessageService.getAllMessage();
      if (!messages) {
        return res.status(404).json({ message: "DB is empty" });
      }
      return res.status(200).json(messages);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Server error" });
    }
  }
}

export default new MessageController();
