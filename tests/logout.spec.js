const { test, expect } = require('@playwright/test');

test('User can logout successfully', async ({ page }) => {

    // Login first
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL(/inventory/);

    // Goto Menu button and click Logout
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // To verify if that logout successfully
    await expect(page).toHaveURL(/saucedemo.com/);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    await page.screenshot({
        path: 'screenshots/logout-success.png'
    });

});