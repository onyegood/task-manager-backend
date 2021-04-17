import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';
import { createTask } from "../../helpers/createTask";

const name = "Create a todo application";
const date = "01/04/2021";

it('should fail with status code of 404', async () => {
  const id = mongoose.Types.ObjectId().toHexString();
  
  await request(app)
    .get(`/api/tasks/${id}`)
    .send()
    .expect(404);
});

it('should fetch task by id with status code of 200', async () => {
  const task = await createTask();

  const response = await request(app)
    .get(`/api/tasks/${task.body.id}`)
    .send({})
    .expect(200);
  
  expect(response.body.id).toEqual(task.body.id);
  expect(response.body.name).toEqual(name);
  expect(response.body.date).toEqual(date);
});