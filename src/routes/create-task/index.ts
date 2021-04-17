import express from 'express';
import { body } from 'express-validator';
import createTaskController from "../../controllers/create-task";
import { validateRequest } from '@goodtickets/common';

const router = express.Router();

router.post('/api/tasks',
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
createTaskController
);

export { router as createTaskRouter };