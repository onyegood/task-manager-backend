import { Request, Response, NextFunction } from 'express';
import { Task } from '../../models/task-model';

export default async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await Task.find({});
  
  res.status(200).send(tasks);
}