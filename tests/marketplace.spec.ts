
import { expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { test } from '../fixtures/base-fixture';

test('Navigate to courses', async ({ page, testData }) => {
  test.slow()

    const mainPage = await test.step('Open main page', async () => {
      const mainPage = new MainPage(page);
      await mainPage.goto();
      return mainPage;
    })

    await test.step('Open courses page', async () => {
      await mainPage.clickCourses();
      expect(page.url()).toContain(testData.link);
    })
});