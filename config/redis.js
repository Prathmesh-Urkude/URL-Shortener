import redis from "redis";

async function connectRedis(url) {
    const client = redis.createClient({url: url});
    await client.connect();
    return client;
}

export default connectRedis;