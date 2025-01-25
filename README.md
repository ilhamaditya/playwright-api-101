# Playwright API Automation 101 🚀 
Simulasi api automation playwright
API testing dasar dengan integrasi Allure untuk pelaporan dan CI menggunakan GitHub Actions.

## 🚀 Baca Link : [Short Reading](https://medium.com/@muxsdn/automating-api-testing-with-playwright-and-github-actions-4eaa434d7f4f)
## 🚀 Demo Link : [Short Demo](https://youtu.be/8eV_B9ny_HE)

## 📂 Struktur Direktori
Berikut adalah struktur direktori utama proyek:
```bash
.
playwright-api-101/
├── .github/
│   └── workflows/
│       └── playwright-api.yml
├── allure-report/
├── allure-results/
├── config/
│   ├── environment.js
│   └── playwright.config.js
├── data/
│   └── authData.js
├── features/
│   └── auth/
│       └── auth.test.js
├── node_modules/
├── services/
│   └── authAPI.js
├── utils/
│   ├── logger.js
│   └── requestHelper.js
├── .env
├── package.json
```

Instal dependensi
```
npm install
```

Buat file .env di root direktori dan tentukan URL dasar AP
```
BASE_URL=https://reqres.in/api
```

Menjalankan pengujian
```
npm test
```

Melihat Laporan Allure
```
npm run report
```
