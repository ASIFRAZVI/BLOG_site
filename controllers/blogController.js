const BlogPost = require('../models/BlogPost');

exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const publicationDate = new Date();
    const newPost = new BlogPost({ title, content, author, publicationDate });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};


  


exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
