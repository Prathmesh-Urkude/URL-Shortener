import express from 'express';
import {handleGenerateShortUrl} from '../controllers/urlController.js';

const router = express.Router();

router.post('/', handleGenerateShortUrl);

export default router;