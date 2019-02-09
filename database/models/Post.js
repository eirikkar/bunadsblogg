const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: String,
    username: {
        type: String,
        required: true
    },
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});
 
const Post = mongoose.model('Post', PostSchema);
 
module.exports = Post;