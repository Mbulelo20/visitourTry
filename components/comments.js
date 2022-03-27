const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')
const User = require('../model/User')
const Comment = require('../model/Usercomment')


// @route   Get api/comments
// @desc    see comments
// @access  Private

router.get('/', auth, async(req, res) => {
    try {
        const comments = await Comment.find({user: req.user.id}).sort({date: -1});
        res.json(comments);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server error');
    }
});

// @component   post api/posts
// @desc        add posts

router.post('/',[auth, [
    check('userComment', 'userComment is required').not().isEmpty()
]], async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {userComment} = req.body;

    try {
        const newComment = new Comment({
            userComment, user: req.user.id
        })
        const comment = await newComment.save();
        res.json(comment);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// @component   PUT api/posts
// @desc        delete posts
// @access      Public

router.delete('/', (req, res) => {
    res.send('delete comment')
});
 

module.exports = router;