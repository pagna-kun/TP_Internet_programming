var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next) {
    console.log("router up");
    res.send("hello from api");
});
router.post('/register',function(req,res,next) {
    console.log("router up");
    res.send("hello from api");
});



module.exports = {
    router
}