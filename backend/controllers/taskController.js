
import { tasks, activityHistory } from "../config/db.js";

export const getTasks = (req,res) => {
    res.status(200).json(tasks);
}

export const deleteTask = (req,res) => {
    const {id} =  req.params;
    const idx = tasks.findIndex(task => task.id === Number(id));

    if(idx === -1){
        return res.status(404).json({message: "Task not found"});
    }

    const [deletedTask] = tasks.splice(idx,1);

    activityHistory.push({
        id: activityHistory.length + 1,
        uid: deletedTask.uid,
        actiom: "DELETD_TASK",
        details: `Deleted Task: ${deletedTask.title}`,
        timestamp: new Date().toISOString
    });

    res.status(200).json({message: "Task deleted successfully"});
}

export const addTask = (req,res) => {
    const { userId, title} = req.body;

    if(!userId || !title){
        return res.status(400).json({message: "userID and title is required"});
    }

    const newTask = {
        id: tasks.length + 1,
        uid: Number(userId),
        title,
        isCompleted: false
    }

    tasks.push(newTask);

    activityHistory.push({
        id: activityHistory.length +1,
        uid: Number(userId),
        action: "CREATED_TASK",
        details: `Created task: ${title}`,
        timestamp: new Date().toISOString()
    });

    res.status(201).json(newTask);
}

export const completeTask = (req, res) => {
    const {id} =  req.params;
    const task = tasks.find(t => t.id === Number(id));

    if(!task){
        return res.status(404).json({message: "Task not found"});
    }

    task.isCompleted = true;

    activityHistory.push({
        id: activityHistory.length + 1,
        uid: task.uid,
        action: 'TASK_COMPLETED',
        details: `Marked task ${task.title} as completed`,
        timestamp: new Date().toISOString()
    })

    res.status(200).json({
        message: "Task marked as completed"
    });
}