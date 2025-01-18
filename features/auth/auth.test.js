// auth.test.js
const { test, expect } = require('@playwright/test');
const AuthAPI = require('./authAPI');
const { validUser, invalidUser } = require('./authData');

test.describe('Auth API Tests', () => {
    let apiRequest;
    let authAPI;

    test.beforeAll(async () => {
        // Membuat instance Playwright APIRequestContext
        apiRequest = await request.newContext();
        authAPI = new AuthAPI(apiRequest); // Initialize AuthAPI dengan apiRequest
    });

    test.afterAll(async () => {
        await apiRequest.dispose(); // Cleanup request context
    });

    test('Should login successfully with valid credentials', async () => {
        const response = await authAPI.login(validUser); // Login request
        expect(response.status()).toBe(200); // Expect HTTP 200
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('token'); // Token harus ada
    });

    test('Should fail to login with invalid credentials', async () => {
        const response = await authAPI.login(invalidUser); // Login request tanpa password
        expect(response.status()).toBe(400); // Expect HTTP 400
        const responseBody = await response.json();
        expect(responseBody.error).toBe('Missing password'); // Validasi error
    });
});
