import req from 'supertest';
import app from '../../src/app';
import { getConnection } from 'typeorm';

beforeAll(() => {

});
  
afterAll(async () => {
    return await getConnection().close();
});

test('[GET] /user', async () => {
  const res = await req(app).get('/user');
  expect(res.status).toEqual(200);
  expect(res.text).toBe('get :: Success request');
});

test('[POST] /user', async () => {
  const res = await req(app).post('/user');
  expect(res.status).toEqual(201);
  // expect(res.text).toBe('post :: Success request');
});
