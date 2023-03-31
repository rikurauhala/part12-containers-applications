const express = require('express');
const router = express.Router();
const { Todo } = require('../mongo');
const { getAsync, setAsync } = require('../redis');

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  });
  const todos = await getAsync('todos');
  await setAsync('todos', Number(todos) + 1);
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);
  next();
};

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.status(200).send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const todo = req.todo;
  const text = req.body.text;
  const done = req.body.done;
  todo.text = text;
  todo.done = done;
  await todo.save();
  res.status(200).send(todo);
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
