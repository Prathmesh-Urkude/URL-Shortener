import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    }}, 
    {timestamps: true}
);

userSchema.pre("save", async function(next) {
    const user = this;
    if(!user.isModified("passwordHash")) {
        return ;
    }
    // Hash password before saving
    const salts = 10;
    this.passwordHash = await bcrypt.hash(user.passwordHash, salts);
});

const User = mongoose.model("user", userSchema);

export default User;