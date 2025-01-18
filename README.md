# playwright-api-101
Simulasi api automation playwright

#1
git clone https://github.com/ilhamaditya/playwright-api-automation.git
cd playwright-api-automation

#2
npm init -y

#3
npm install playwright @playwright/test

#4
npx playwright install

#5
Folder
project/
project/
│
├── features/                   # Folder untuk feature-based modules
│   ├── auth/                   # Folder khusus untuk fitur Auth
│   │   ├── auth.test.js        # File test untuk Auth API
│   │   ├── authAPI.js          # Logic API untuk Auth
│   │   └── authData.js         # Test data untuk Auth
│
├── utils/                      # Folder helper/utility
│   ├── requestHelper.js        # Wrapper untuk HTTP request
│   └── logger.js               # (Opsional) Logger untuk output
│
├── config/                     # Konfigurasi
│   ├── environment.js          # Base URL dan config lainnya
│   └── playwright.config.js    # Playwright config
│
└── reports/                    # Folder untuk laporan (Allure, dsb.)

