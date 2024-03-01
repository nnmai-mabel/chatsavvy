export const sendMessage = async(req,res) => {
    try {

        // Get message and Id
        const {message} = req.body;
        const {id} = req.params.id; // get id from the URL
        const senderId = req.userId
    } catch (error) {
        console.log("Error message in sendMessage controllerL ", error.message)
        res.status(500).json({error:"Internal server error"});
    }
}