var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const categoryService = require('../services/category');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

// all users
router.get('/all', (req, res) => {
  // to do
  res.json({});
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

module.exports = router