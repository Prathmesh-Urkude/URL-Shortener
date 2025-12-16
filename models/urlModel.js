import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{timestamp: {type: Number}}],
    }, {timestamps: true}
);

const Url = mongoose.model("url", urlSchema);

export default Url;