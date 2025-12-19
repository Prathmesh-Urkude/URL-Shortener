import express from 'express';
import {handleGenerateShortUrl, handleGetAnalytics, handleRedirectToUrl} from '../controllers/urlController.js';
import handleGetUrlCache from '../controllers/cacheController.js';

const router = express.Router();

router.post('/', handleGenerateShortUrl);
router.get('/:shortUrl', handleGetUrlCache, handleRedirectToUrl);
router.get('/analytics/:shortUrl', handleGetAnalytics);

export default router;