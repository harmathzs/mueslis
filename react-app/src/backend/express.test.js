import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import { app, conn } from './express.cjs';

describe('Test Vitest', ()=>{
    // Creates a suite of tests, allowing for grouping and hierarchical organization of tests.

    it('tests if 2+3=5', ()=>{
        // Defines a test case with a given name and test function.

        expect(2+3).toBe(5);
        // Checks that a value is what you expect. It calls Object.is to compare values. Don't use toBe with floating-point numbers.
    })
})

describe('Imports', ()=>{
    it('validates imports existence', ()=>{
        expect(app).not.toBeNull();
        expect(conn).not.toBeNull();
    })
})

describe('Mueslis Endpoints', () => {
    beforeEach(() => {
        // Registers a callback function to be executed before each test within the current suite.

        vi.restoreAllMocks();
        /* Calls .mockRestore() on every mocked function.
            This will empty .mock state, restore all original mock implementations, and restore original descriptors of spied-on objects.
            This is useful for inter-test cleanup and/or removing mocks created by vi.spyOn(...). */
    });

    it('GET /mueslis returns mueslis list', async () => {
        vi.spyOn(conn, 'query')
        .mockImplementation((sql, cb) => {
            // Accepts a function to be used as the mock implementation.

            cb(null, [{ id: 1, name: 'Test Muesli', price: 5.99 }], []);
        });

        const res = await request(app).get('/mueslis');
        expect(res.status).toBe(200);
        expect(res.body.result).toEqual([{ id: 1, name: 'Test Muesli', price: 5.99 }]);
    })

    it('POST /mueslis creates with valid data', async () => {
        const mockInsertId = 2;
        vi.spyOn(conn, 'query').mockImplementation((sql, values, cb) => {
            cb(null, { insertId: mockInsertId }, []);
        });

        const res = await request(app)
            .post('/mueslis')
            .send({ name: 'New Muesli', price: 6.99 });
        expect(res.status).toBe(201);
        expect(res.body.id).toBe(mockInsertId);
    })

    it('POST /mueslis rejects invalid data', async () => {
        const res = await request(app)
            .post('/mueslis')
            .send({ name: '', price: 0 });
        expect(res.status).toBe(300);
    })

    it('PATCH /mueslis updates fields', async () => {
        vi.spyOn(conn, 'query').mockImplementation((sql, values, cb) => {
            cb(null, { affectedRows: 1 }, []);
        });

        const res = await request(app)
            .patch('/mueslis')
            .send({ id: 1, name: 'Updated Muesli', price: 7.99 });
        expect(res.status).toBe(200);
        expect(res.body.updatedId).toBe(1);
    })

    it('PATCH /mueslis handles invalid price', async () => {
        const res = await request(app)
            .patch('/mueslis')
            .send({ id: 1, price: -1 });
        expect(res.status).toBe(300);
    })
})