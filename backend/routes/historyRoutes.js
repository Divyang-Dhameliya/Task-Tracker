import express from 'express';
import { getUsersHistory } from '../controllers/historyController.js';

const historyRouter = express.Router();

historyRouter.get('/', getUsersHistory);

export default historyRouter;