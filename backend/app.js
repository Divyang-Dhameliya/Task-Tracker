import express from 'express';
import userRouter from './routes/userRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import historyRouter from './routes/historyRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/history', historyRouter);

app.use((err,req,res,next) => {
    res.status(500).json( { message: err.message || "Invalid request" });
});

app.listen(PORT, () => {
    console.log(`server is working on port: ${PORT}`);
});
