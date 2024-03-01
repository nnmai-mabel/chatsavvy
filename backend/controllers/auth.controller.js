import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {

        // Get input from user
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Check if password doesn't match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" })
        }

        // Check if this user exists in the database with this username
        const user = await User.findOne({ username })

        // If user exists
        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        // If user not exist, create hashed password and create user
        // HASH Password here
        const salt = await bcrypt.genSalt(10); // higher is more secure but slower as well
        const hashedPassword = await bcrypt.hash(password, salt);

        // Avatar based on username
        // https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}}`

        // Create new User using Postman
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        // If there is new user
        if (newUser) {
            // Save new user data to MongoDB
            await newUser.save();

            // 201 means created
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({error: "Invalid user data"});
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = (req, res) => {
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logoutUser");
}