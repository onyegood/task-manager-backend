import request from 'supertest';
import { app } from '../app';

export const createTask = () => {
  return request(app)
    .post('/api/tasks')
    .set({})
    .send({
      name: "Create a todo application",
      date: '01/04/2021'
    })
    .expect(201);
}