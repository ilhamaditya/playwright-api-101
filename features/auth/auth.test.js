const { test, expect, request } = require('@playwright/test');
const AuthAPI = require('../../services/authAPI');
const { validUser, invalidUser } = require('../../data/authData');
const logger = require('../../utils/logger');


test.describe('Auth API Tests', () => {
    let apiRequest;
    let authAPI;

    test.beforeAll(async () => {
        logger.info('Starting Auth API Tests...');
        apiRequest = await request.newContext();
        authAPI = new AuthAPI(apiRequest);
    });

    test.afterAll(async () => {
        logger.info('Cleaning up after tests...');
        await apiRequest.dispose();
    });

    test('Should login successfully with valid credentials', async () => {
        logger.info('Test: Valid Login');
        const response = await authAPI.login(validUser);
        expect(response.status()).toBe(200); // Validasi HTTP 200
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('token'); // Validasi keberadaan token
        logger.info('Login successful with valid credentials');
    });

    test('Should fail to login with invalid credentials', async () => {
        logger.info('Test: Invalid Login');
        const response = await authAPI.login(invalidUser);
        expect(response.status()).toBe(400); // Validasi status kode 400
        const responseBody = await response.json();
        expect(responseBody.error).toBe('Missing password'); // Validasi error message
        logger.warn('Login failed with invalid credentials'); // Logging untuk kasus gagal
    });
});
