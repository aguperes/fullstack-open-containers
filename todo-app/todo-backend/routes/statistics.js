const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

/* GET stats data. */
router.get('/', async (req, res) => {
  const currentCount = await getAsync('added_todos')
  res.send({'added_todos': currentCount})
});

module.exports = router;
