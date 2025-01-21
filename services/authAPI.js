const logger = require('../utils/logger');
const baseURL = require('../config/environment');

class AuthAPI {
    constructor(request) {
        this.request = request;
    }

    async login(payload) {
        try {
            logger.info(`Sending POST request to ${baseURL}/login with payload: ${JSON.stringify(payload)}`);
            const response = await this.request.post(`${baseURL}/login`, { data: payload });

            if (!response.ok()) {
                const errorResponse = await response.json();
                logger.error(`Request failed with status ${response.status()}: ${JSON.stringify(errorResponse)}`);
                throw new Error(`Request failed: ${response.status()} - ${errorResponse.error || 'Unknown error'}`);
            }

            logger.info('Request successful');
            return response;
        } catch (error) {
            logger.error(`AuthAPI.login error: ${error.message}`);
            throw error;
        }
    }
}

module.exports = AuthAPI;
