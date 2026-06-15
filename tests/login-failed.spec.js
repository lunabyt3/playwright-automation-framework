const { test, expect } = require('@playwright/test');

test('User cannot login with the invalid password', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');

    await page.fill('[data-test="password"]', 'invalid_p@ssw0rd');

    await page.click('[data-test="login-button"]');

    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match');

    await page.screenshot({
        path: 'screenshots/login-failed.png'
    });

});