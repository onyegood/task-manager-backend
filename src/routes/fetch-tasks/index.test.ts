import request from 'supertest';
import { app } from '../../app';
import { createTask } from "../../helpers/createTask";

const name = "Create a todo application";
const date = "01/04/2021";

it('should fetch all tasks successfuly', async () => {
  await createTask();
  await createTask();
  await createTask();
  await createTask();
  await createTask();

  const response = await request(app)
    .get('/api/tasks')
    .send({})
    .expect(200);
  
  expect(response.body.length).toEqual(5);
  expect(response.body[0].name).toEqual(name);
  expect(response.body[0].date).toEqual(date);
});