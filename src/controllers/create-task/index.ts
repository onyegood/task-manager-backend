import { Request, Response, NextFunction } from 'express';
import { Task } from '../../models/task-model';

export default async (req: Request, res: Response, next: NextFunction) => {
    
    const {name, date, status} = req.body;

    const task = Task.build({ name, date, status });
    await task.save();

    res.status(201).send(task);
}