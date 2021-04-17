import { NotFoundError } from '@goodtickets/common';
import { Request, Response, NextFunction } from 'express';
import { Task } from '../../models/task-model';

export default async (req: Request, res: Response, next: NextFunction) => {
  const {name, date, status} = req.body;
  const id = req.params.id;

  const task = await Task.findById(id);
  
  if (!task) {
    throw new NotFoundError();
  }

  task.set({ name, date, status });

  await task.save();

  res.status(200).send(task);
}