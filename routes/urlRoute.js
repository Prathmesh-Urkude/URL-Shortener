import express from 'express';
import {handleGenerateShortUrl, handleGetAnalytics, handleRedirectToUrl} from '../controllers/urlController.js';

const router = express.Router();

router.post('/', handleGenerateShortUrl);
router.get('/:shortUrl', handleRedirectToUrl);
router.get('/analytics/:shortUrl', handleGetAnalytics);

export default router;