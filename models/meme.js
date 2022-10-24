import mongoose from "mongoose";

const memeSchema = mongoose.Schema({
    userId: String,
    topText: String,
    bottomText: String,
    fontColor: String, 
    fontFamily: String, 
    fontSize: String,
    selectedFile: String
});

const meme = mongoose.model('meme', memeSchema);

export default meme;