import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '@goodtickets/common';
import updateTaskController from "../../controllers/update-task";


const router = express.Router();

router.put('/api/tasks/:id', 
[
  body('name')
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({min: 5})
    .withMessage('Name must be minimum of 5 characters'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('Date is required')
],
validateRequest,
updateTaskController
);

export { router as updateTaskRouter };