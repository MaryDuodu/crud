const res = require("express/lib/response");
const Post = require("../models/post.module")

const getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json(posts)
};

const getSinglePost = async (req, res) =>{
    const postId = req.params.postId;
    const post = await Post.findById(postId) ;
    res.status(200).json(post);
  };

  

const createPost = async (req, res) =>{
    const post = await Post.create(req.body) ;
    res.status(201).json(post)
};


const updatePost = async (req, res) =>{
    const postId = req.params.postId;
    const post = await Post.findByIdAndUpdate(postId, req.body, {new: true});
    res.status(201).json(post);
};

const deletePost = async (req, res) =>{
    res.send("<h3>Post deleted successfully</h3>")
};

module.exports = {
    getAllPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost,
}