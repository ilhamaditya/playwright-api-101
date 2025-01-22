const { test } = require('@playwright/test');

test.beforeEach(async ({}, testInfo) => {
  testInfo.attachments.push({
    name: 'Environment',
    contentType: 'application/json',
    body: Buffer.from(JSON.stringify({ baseURL: process.env.BASE_URL })),
  });
});
