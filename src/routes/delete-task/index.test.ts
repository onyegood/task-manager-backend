import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { createTask } from '../../helpers/createTask';

const name = "Create a todo application";
const date = "01/04/2021";

it('should return status code of 404 if task does not exist', async () => {
  const id = mongoose.Types.ObjectId().toHexString();
  await request(app)
    .delete(`/api/tasks/${id}`)
    .send({})
    .expect(404);
});

it('should delete task with status code of 200', async () => {
  // Create task with task model
  const task = await createTask();

  const response = await request(app)
    .get(`/api/tasks/${task.body.id}`)
    .send({})
    .expect(200);

  expect(response.body.id).toEqual(task.body.id);
  expect(response.body.name).toEqual(name);
  expect(response.body.date).toEqual(date);

  //Delete task
  await request(app)
    .delete(`/api/tasks/${task.body.id}`)
    .send({})
    .expect(200);


  const tasks = await request(app)
    .get('/api/tasks')
    .send({})
    .expect(200);

  expect(tasks.body.length).toEqual(0);
});