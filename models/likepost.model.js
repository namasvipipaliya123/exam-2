const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 }
}, { timestamps: true });

const  Post= mongoose.model('Post', postSchema);

module.exports = Post;