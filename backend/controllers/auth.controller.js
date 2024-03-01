import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords don't match"})
        }

        // Check if this user exists in the database with this username
        const user = await User.findOne({username})

        // If user exists
        if(user){
            return res.status(400).json({error: "Username already exists"})
        }

        // HASH Password here

        // Avatar based on username
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}}`

        // Create new User using Postman
        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        // Save new user data to MongoDB
        await newUser.save();

        // 201 means created
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })

    } catch (error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const login = (req, res) => {
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logoutUser");
}