const logger = require('../utils/logger');
const baseURL = require('../config/environment');

class AuthAPI {
    constructor(request) {
        this.request = request;
    }

    async login(payload) {
        logger.info(`Sending POST request to ${baseURL}/login with payload: ${JSON.stringify(payload)}`);
        try {
            const response = await this.request.post(`${baseURL}/login`, { data: payload });

            if (!response.ok()) {
                // Hanya mengembalikan respons jika status bukan 2xx
                const errorResponse = await response.json();
                logger.error(`Request failed with status ${response.status()}: ${JSON.stringify(errorResponse)}`);
                return response; // Kembalikan respons yang gagal
            }

            logger.info('Request successful');
            return response; // Kembalikan respons yang berhasil
        } catch (error) {
            logger.error(`AuthAPI.login error: ${error.message}`);
            throw error; // Lempar error jika terjadi kesalahan pada request
        }
    }
}

module.exports = AuthAPI;
