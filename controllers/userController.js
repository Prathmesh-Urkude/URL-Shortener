import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email : email });
        if(!user) {
            return res.status(400).render("login", { error: "Invalid email" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if(!isPasswordValid) {
            return res.status(400).render("login", { error: "Invalid password" });
        }
        return res.status(200).redirect('/');
    } catch (error) {
        res.status(500).render("login", { error: "Server error. Please try again later." });
    }
}

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).render("signup", { error: "User already exists" });
        }
        
        await User.create({
            name: name,
            email: email,
            passwordHash: password,
        });
        res.status(201).redirect("/user/login");
    } catch (error) {
        res.status(500).render("signup", { error: "Server error. Please try again later." });
    }
}

async function handleGetUserProfile(req, res) {}

export {handleUserSignup, handleUserLogin, handleGetUserProfile}
