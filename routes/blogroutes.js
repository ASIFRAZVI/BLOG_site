const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


router.get('/', (req, res)=>{
    res.render("index")
  })

router.post('/createPost', blogController.createPost);
router.get('/getPosts', blogController.getPosts);
router.put('/updatePost/:id', blogController.updatePost);
router.delete('/deletePost/:id', blogController.deletePost);

module.exports = router;
