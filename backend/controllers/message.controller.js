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

        // SOCKET IO functionality here

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

export const getMessages = async (req, res) => {
    try {
        
        // Id of receiver
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        // Find the conversation between 2 users
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("messages"); // return array of objects that each object is a message, not just a reference

        // If conversation not exist, return emtpy array
        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error message in getMessages controller ", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}