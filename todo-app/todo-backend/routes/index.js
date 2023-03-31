const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis');

const configs = require('../util/config');

let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics. */
router.get('/statistics', async (_req, res) => {
  const todos = await getAsync('todos');
  res.send({
    added_todos: todos || 0,
  });
});

module.exports = router;
