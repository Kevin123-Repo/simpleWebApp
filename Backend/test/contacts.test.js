const request = require('supertest');
const app = require('../server'); // Make sure this points to your Express app

describe('Contacts API', () => {
  it('should GET all contacts', async () => {
    const res = await request(app).get('/contacts');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should GET a contact by ID', async () => {
    // Replace with an actual ID from DB before running tests
    const res = await request(app).get('/contacts/67b62f6f86fb9394ca1ea47f'); 
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('firstName');
  });

  it('should POST a new contact', async () => {
    const res = await request(app)
      .post('/contacts')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        address: '123 Test St',
        city: 'Test City',
        postcode: '12345',
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('firstName', 'John');
  });

  it('should PATCH a contact', async () => {
    const res = await request(app)
   // Replace with an actual ID from DB before running tests
      .patch('/contacts/67b62f6f86fb9394ca1ea47f') 
      .send({ firstName: 'Updated' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('firstName', 'Updated');
  });

  it('should DELETE a contact', async () => {
    // Replace with an actual ID from DB before running tests
    const res = await request(app).delete('/contacts/67b62f6f86fb9394ca1ea47f'); 
    expect(res.status).toBe(200);
    // Replace with an actual ID from DB before running tests
    expect(res.body.message).toBe('Delete Contact with ID 67b62f6f86fb9394ca1ea47f');
  });
});
