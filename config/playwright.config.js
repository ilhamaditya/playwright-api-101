const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features', // Lokasi folder tempat semua file test berada
  timeout: 30000, // Timeout default untuk setiap test (30 detik)
  reporter: [
    ['list'], // Tambahkan output sederhana ke console
    ['allure-playwright'], // Reporter untuk Allure
    {
      outputFolder: 'allure-results', // Specify the output folder for Allure results
      suiteTitle: true, // Optional: Include suite name in the Allure report
    },
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://reqres.in/api', // Default baseURL
    headless: true, // Jalankan browser di mode headless
    trace: 'on', // Aktifkan trace untuk debugging (opsional)
  },
  projects: [
    {
      name: 'API Tests',
      use: { 
        baseURL: process.env.BASE_URL, 
        browserName: 'webkit', // Sesuaikan dengan kebutuhan, default webkit
      },
    },
  ],
});
