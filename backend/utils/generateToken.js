import jwt from "jsonwebtoken";

// Create JWT and set it in cookie
const generateTokenAndSetCookie = (userId, res) => {

    // Create a token
    // sign method does a payload and info is embedded into jwt token
    // JWT_SECRET is the key to sign the token, create a digital signature
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    // Set it into cookie
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15d, 24h, 60m, 60s, 1000ms making it in milisecond format that cookie's age alive
        httpOnly: true, // prevent cross-site scripting (XSS) attacks 
        sameSite:"strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    })
}

export default generateTokenAndSetCookie