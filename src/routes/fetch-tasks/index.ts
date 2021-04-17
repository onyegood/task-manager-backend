import express from 'express';
import { validateRequest } from '@goodtickets/common';
import fetchTasksController from "../../controllers/fetch-tasks";


const router = express.Router();

router.get('/api/tasks', validateRequest, fetchTasksController);

export { router as fetchTasksRouter };