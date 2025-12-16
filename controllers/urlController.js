import {nanoid} from 'nanoid';
import URL from '../models/urlModel.js';

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: `url is required`});

    const shortUrl = nanoid(8);
    await URL.create({
        shortUrl: shortUrl,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({id: shortUrl});
}

export {handleGenerateShortUrl};