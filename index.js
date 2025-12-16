import express from "express";
import urlRoutes from "./routes/urlRoute.js";
import connectMongoDB from "./config/mongoDB.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8000;

await connectMongoDB(process.env.MONGO_URI).then(() => console.log("Connected to MongoDB"));

app.use(express.json());
app.use("/url", urlRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  
