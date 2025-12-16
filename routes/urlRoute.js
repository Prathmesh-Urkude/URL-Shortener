import express from 'express';
import {handleGenerateShortUrl, redirectToUrl} from '../controllers/urlController.js';

const router = express.Router();

router.post('/', handleGenerateShortUrl);
router.get('/:shortUrl', redirectToUrl);

export default router;