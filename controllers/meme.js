import express from 'express';
import mongoose from 'mongoose';

import Meme from '../models/meme.js';

const router = express.Router();

export const getMemes = async (req, res) => { 
    try {
        const memes = await Meme.find();
                
        res.status(200).json(memes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMeme = async (req, res) => {
    const meme = req.body;

    const newMeme = new Meme({ ...meme, craetor: req.userId, createdAt: new Date().toISOString( ) })

    try {
        await newMeme.save();

        res.status(201).json(newMeme);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMeme = async (req, res) => {
    const { id } = req.params;
    const { name, title, message, likes, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No meme with id: ${id}`);

    const updatedMeme = { userId: localId, topText , bottomText, fontColor, fontFamily, fontSize, selectedFile, _id: id };

    await Meme.findByIdAndUpdate(id, updatedMeme, { new: true });

    res.json(updatedMeme);
}

export const deleteMeme = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No meme with id: ${id}`);

    await Meme.findByIdAndRemove(id);

    res.json({ message: "Meme deleted successfully." });
}

export default router;