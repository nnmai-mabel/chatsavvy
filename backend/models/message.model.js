import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // this senderId will be an Id from the user model/user collection
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // this senderId will be an Id from the user model
        required: true
    },
    message:{
        type: String,
        required: true
    }

    // createdAt, updatedAt => message.createdAt: 15:40
}, {timestamps: true})

const Message = mongoose.model("Message", messageSchema);

export default Message;