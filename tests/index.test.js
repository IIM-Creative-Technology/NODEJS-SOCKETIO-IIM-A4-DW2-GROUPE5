const request = require("supertest");
const index = require("../api/index");
const express = require("express")
const app = new express();
app.use('/', index.router);

describe("Test the root path", () => {

  test("Get Ok code response from / get route", () => {
    request(index.router)
    .get("/")
    .expect(304)
  });

  test('Get respoonse messafe from / get route', async() => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("{\"message\":\"Bienvenue sur l'api\"}");
  });
})
