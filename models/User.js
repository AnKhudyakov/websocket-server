import { Schema, model } from "mongoose";

const User = new Schema({
    name: {type: String, required: true }
})

export default model("User", User);