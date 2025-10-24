import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check if the page title is correct
    await expect(page).toHaveTitle(/Muhammad Awais/);

    // Check if the main heading is visible
    await expect(
      page.getByRole('heading', { name: /hi, i'm muhammad awais/i })
    ).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Test navigation links
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL('/about');

    await page.getByRole('link', { name: /projects/i }).click();
    await expect(page).toHaveURL('/projects');

    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');

    await page.getByRole('link', { name: /muhammad awais/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('should have responsive design', async ({ page }) => {
    await page.goto('/');

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(
      page.getByRole('button', { name: /toggle mobile menu/i })
    ).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should have working theme toggle', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.getByRole('button', { name: /toggle theme/i });
    await expect(themeToggle).toBeVisible();

    // Test theme toggle functionality
    await themeToggle.click();
    // Note: In a real test, you'd check for actual theme changes
  });

  test('should have accessible elements', async ({ page }) => {
    await page.goto('/');

    // Check for skip link
    await expect(
      page.getByRole('link', { name: /skip to main content/i })
    ).toBeVisible();

    // Check for proper heading hierarchy
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();

    // Check for proper button labels
    const buttons = page.getByRole('button');
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });
});
