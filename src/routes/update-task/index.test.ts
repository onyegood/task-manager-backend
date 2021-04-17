import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';

const name = "Create a todo application";
const date = "01/04/2021";

it('should return a 404 error if task id is not found', async () => {
  const id = mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/tasks/${id}`)
    .set({})
    .send({
      name: 'Mango',
      date
    })
    .expect(404);
});


it('should return a 400 error if the user provides invalid name', async() => {

  const task = await request(app)
    .post(`/api/tasks`)
    .set({})
    .send({
      name: 'Mango',
      date
    });

  await request(app)
    .put(`/api/tasks/${task.body.id}`)
    .set({})
    .send({
      name: '',
      date
    })
    .expect(400);

  await request(app)
    .put(`/api/tasks/${task.body.id}`)
    .set({})
    .send({
      date
    })
    .expect(400);
});

it('should return a 400 error if the user provides invalid date', async() => {

  const task = await request(app)
    .post(`/api/tasks`)
    .set({})
    .send({
      name: 'Mango',
      date
    });

  await request(app)
    .put(`/api/tasks/${task.body.id}`)
    .set({})
    .send({
      name: 'Mango',
      date: null
    })
    .expect(400);

  await request(app)
    .put(`/api/tasks/${task.body.id}`)
    .set({})
    .send({
      name: 'Mango'
    })
    .expect(400);
});

it('should return a 200 if the user provides a valid name and date', async() => {
  
  const task = await request(app)
    .post(`/api/tasks`)
    .set({})
    .send({
      name: 'Mango',
      date
    });

  await request(app)
    .put(`/api/tasks/${task.body.id}`)
    .set({})
    .send({
      name,
      date
    })
    .expect(200);

  const response = await request(app)
    .get(`/api/tasks/${task.body.id}`)
    .send()
    .expect(200);

    expect(response.body.name).toEqual(name);
    expect(response.body.date).toEqual(date);
});
