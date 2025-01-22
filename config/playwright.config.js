const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features',
  timeout: 30000,
  reporter: [
    ['list'], // Console output
    ['allure-playwright', { 
      outputFolder: 'allure-results', // Folder output Allure
    }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://reqres.in/api',
    headless: true,
    trace: 'on', // Aktifkan trace untuk debugging
  },
  projects: [
    {
      name: 'API Tests',
      use: { 
        baseURL: process.env.BASE_URL,
      },
    },
  ],
});
