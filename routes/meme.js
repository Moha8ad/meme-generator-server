import express from 'express';

import { getMemes, createMeme, updateMeme, deleteMeme } from '../controllers/meme.js';

const router = express.Router();

router.get('/', getMemes);
router.post('/', createMeme);
router.patch('/:id', updateMeme);
router.delete('/:id', deleteMeme);

export default router;