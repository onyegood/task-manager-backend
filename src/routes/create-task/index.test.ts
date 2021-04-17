import request from 'supertest';
import { app } from '../../app';
import { Task } from '../../models/task-model';
import { createTask } from "../../helpers/createTask";

const name = "Create a todo application";
const date = "01/04/2021";

it('has a route handler listening on /api/tasks for post request', async () => {
  const response = await request(app).post('/api/tasks').send({});

  expect(response.status).not.toEqual(404);
});

it('return an error if invalid title is provided', async () => {
  await request(app)
    .post('/api/tasks')
    .set({})
    .send({
      title: '',
      date
    })
    .expect(400);

  await request(app)
    .post('/api/tasks')
    .set({})
    .send({
      date
    })
    .expect(400);
});

it('return an error if invalid date is provided', async () => {
  await request(app)
    .post('/api/tasks')
    .set({})
    .send({
      title: 'Apple',
      date: null
    })
    .expect(400);

    await request(app)
    .post('/api/tasks')
    .set({})
    .send({
      title: 'Apple'
    })
    .expect(400);
});

it('create a task with valid input', async () => {
    let task = await Task.find({});
    expect(task.length).toEqual(0);
    
    await createTask();

    task = await Task.find({});

    expect(task.length).toEqual(1);
    expect(task[0].name).toEqual(name);
    expect(task[0].date).toEqual(date);
});
