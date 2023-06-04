import Message from "../../models/Message.js";

class MessageService {
  
  async getAllMessage() {
    return await Message.find({});
  }
}

export default new MessageService();
