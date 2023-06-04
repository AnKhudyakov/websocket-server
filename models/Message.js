import { Schema, model } from "mongoose";

const Message = new Schema({
    sender: {type: String, required: true },
    recipient: {type: String, required: true},
    title: {type: String},
    value: {type: String},
    date:{type: String}
})

export default model("Message", Message);