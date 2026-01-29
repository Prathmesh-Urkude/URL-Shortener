import express from "express";
import dotenv from "dotenv";
import path from "path";

import connectMongoDB from "./config/mongoDB.js";
import connectRedis from "./config/redis.js";

import homeRoutes from "./routes/homeRoute.js";
import urlRoutes from "./routes/urlRoute.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

await connectMongoDB(process.env.MONGO_URI).then(() => console.log("Connected to MongoDB"));
await connectRedis(process.env.REDIS_URL).then(() => console.log("Connected to Redis"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use("/bootstrap", express.static(path.resolve("./node_modules/bootstrap/dist")));

app.use("/", homeRoutes);
app.use("/url", urlRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  