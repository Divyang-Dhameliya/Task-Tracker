import express from 'express';
import { addTask,deleteTask,getTasks,completeTask } from '../controllers/taskController.js';
const taskRouter = express.Router();

taskRouter.get('/',getTasks);
taskRouter.post('/', addTask);
taskRouter.delete('/:id', deleteTask);
taskRouter.patch('/complete/:id', completeTask);

export default taskRouter;