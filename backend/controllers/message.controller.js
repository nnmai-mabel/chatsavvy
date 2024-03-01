import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'

export const sendMessage = async (req, res) => {
    try {

        // Get message and Id from user
        const { message } = req.body;
        const { id: receiverId } = req.params; // get id from the URL
        const senderId = req.user._id

        // Find conversation between these 2 users
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        // If never talked before, create a new conversation
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        // Create new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        // If there is new message
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // Save conversation and message to database, take longer
        // await conversation.save();
        // await newMessage.save();

        // This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        // Send it as response
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error message in sendMessage controller ", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}