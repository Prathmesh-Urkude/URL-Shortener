import {nanoid} from 'nanoid';
import Url from '../models/urlModel.js';

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: `url is required`});

    const shortUrl = nanoid(8);
    await Url.create({
        shortUrl: shortUrl,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({id: shortUrl});
}

async function redirectToUrl(req, res) {
    const shortUrl = req.params.shortUrl;
    const entry = await Url.findOneAndUpdate({
        shortUrl: shortUrl
        }, {$push: {visitHistory: {timestamp: Date.now()}}}
    );
    if(!entry) return res.status(404).send("Short URL not found");
    
    res.redirect(entry.redirectUrl);
}

export {handleGenerateShortUrl, redirectToUrl};