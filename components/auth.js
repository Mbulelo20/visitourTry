const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator/check')
const auth = require('../middleware/auth')
const User = require('../model/User')

// @component   GET api/users
// @desc        Get logged in users
// @access      Public

router.get('/', auth, async (req, res) => {
    try {
        const user = await (await User.findById(req.user.id)).isSelected('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});  

// @component   POST api/users
// @desc        auth users and get token
// @access      Public
router.post(
    '/', 
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {email, password} = req.body;

        try {
            let user = await User.findOne({email}); 
            

            if(!user){
                return res.status(400).json({msg: 'Invalid credetials'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res.status(400).json({msg: 'Invalid credentials'});
            } 
            
            const payload = {
                user: {
                    id: user.id
                }
            }
    
            jwt.sign(
                payload, 
                config.get('jwtSecret'),
                {
                    expiresIn: 360000
                }, 
                (err, token) => {
                    if(err) throw err;
                    res.json({token});
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
            
        }
    }
); 

module.exports = router;  