import connectRedis from "../config/redis.js";
import dotenv from "dotenv";

dotenv.config();

const redisClient = await connectRedis(process.env.REDIS_URL);

export default redisClient;