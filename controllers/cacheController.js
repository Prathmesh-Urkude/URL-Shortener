import redisClient from '../models/cacheModel.js';

async function handleGetUrlCache(req, res, next) {
    try {
        console.time("redis");
        const shortUrl = req.params.shortUrl;
        console.log("Checking cache for:", shortUrl);
        const cachedUrl = await redisClient.get(shortUrl);
        console.log("Cache result:", cachedUrl);

        if(cachedUrl === null) return next();
        console.timeEnd("redis");
        return res.redirect(cachedUrl);
    }
    catch(err) {
        console.log("Error fetching from cache:", err);
        return next();
    }
}

export default handleGetUrlCache;