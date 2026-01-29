import express from "express";
import Url from "../models/urlModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const allUrls = await Url.find({}); 
    res.render("home", { urls: allUrls });
});

export default router