import express from 'express';
import { validateRequest } from '@goodtickets/common';
import fetchTaskController from "../../controllers/fetch-task";


const router = express.Router();

router.get('/api/tasks/:id', validateRequest, fetchTaskController);

export { router as fetchTaskRouter };