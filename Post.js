import mongoose from "mongoose";

const Post = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String }
})

export default mongoose.model('Post', Post)