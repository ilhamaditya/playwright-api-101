const baseURL = require('../../config/environment'); // Menggunakan base URL dari environment.js

class AuthAPI {
    constructor(request) {
        this.request = request; // Playwright APIRequestContext instance
    }

    async login(payload) {
        return await this.request.post(`${baseURL}/login`, {
            data: payload, // Payload JSON untuk login
        });
    }
}

module.exports = AuthAPI;
