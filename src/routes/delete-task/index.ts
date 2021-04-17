import express from 'express';
import { validateRequest } from '@goodtickets/common';
import deleteTaskController from "../../controllers/delete-task";


const router = express.Router();

router.delete('/api/tasks/:id', validateRequest, deleteTaskController);

export { router as deleteTaskRouter };