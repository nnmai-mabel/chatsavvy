import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        // Get current authenticated userId
        const loggedInUserId = req.user._id;

        // Fetch all users from the database
        // but the one that is not equal (ne) tp this loggedInUserId
        // because don't want to see ourself on sidebar
        // If want to send ourself messages
        // const allUsers = await User.find()
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")
        
        // Return filteredUsers
        res.status(200).json(filteredUsers)
        
    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}