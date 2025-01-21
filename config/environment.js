require('dotenv').config();  // Load .env file ke dalam environment variables

const baseURL = process.env.BASE_URL || 'https://reqres.in/api'; // Default jika BASE_URL tidak ada

module.exports = baseURL;
