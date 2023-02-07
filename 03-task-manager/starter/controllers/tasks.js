const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res
    .status(200)
    .json({ success: true, data: { tasks, nbHits: tasks.length } });

  // try {
  //   const tasks = await Task.find({});
  //   // res.status(200).json({ tasks });
  //   // res.status(200).json({ tasks, amount: tasks.length });
  //   res
  //     .status(200)
  //     .json({ success: true, data: { tasks, nbHits: tasks.length } });
  // } catch (error) {
  //   res.status(500).json({ msg: error });
  // }
  //first set up to test that the code works
  // res.send("get all tasks");
});

// const createTask = (req, res) => {
//   res.json(req.body);
// };

//create task
const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  return next(error);
  res.status(201).json({ task });
});

//get single task
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
    // const error = new Error("Not Found");
    // error.status = 404;
    // return next(error);
  }
  res.status(200).json({ task });
  // res.json({ id: req.params.id });
});

//delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });

  if (!task) {
    // return res
    //   .status(404)
    //   .json({ msg: `No task with id: ${taskID} to delete` });
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
  // res.send(" delete task");
});

//update task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    // return res
    //   .status(404)
    //   .json({ msg: `Cannot edit task id: ${taskID}, task not found` });
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ id: taskID, data: req.body });
  // res.send(" update task");
});

//update edit - PUT method
const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `Cannot edit task id: ${taskID}, task not found` });
  }
  res.status(200).json({ id: taskID, data: req.body });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,

  //for demonstration only
  editTask,
};
