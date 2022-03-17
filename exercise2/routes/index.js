//for use route
var express = require('express');
var router = express.Router();

const { login } = require('../service/login');
const { register } = require('../service/register');

//home page 
router.get('/', function(req,res,next) {
    console.log("router up");
    res.send("Hello, this is API");
});
//login page
router.post('/login', function(req,res,next) {
    const {email, password} = req.body;
    // console.log(email, password);
    const result = login(email, password);
    res.json(result);
});
//register page
router.post('/register', function(req,res,next) {
    const param = req.body;
    const result = register(param);
    res.json(result);
});

module.exports = router;