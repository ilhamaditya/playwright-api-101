// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['allure-playwright'],  // Reporter untuk Allure
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://reqres.in/api',  // Menggunakan dotenv untuk BASE_URL
    headless: true,  // Menjalankan browser di background
  },
  projects: [
    {
      name: 'API Tests',
      use: { 
        baseURL: process.env.BASE_URL, 
        browserName: 'webkit', // Atur sesuai dengan kebutuhan, bisa chromium, firefox, atau webkit
      },
    },
  ],
});
