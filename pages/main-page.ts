import {type Locator, type Page} from '@playwright/test';

export class MainPage { 
    readonly page: Page;
    readonly coursesLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.coursesLink = page.locator('//a[contains(@href, "work/courses-education/")]');
    }

    async goto() {
        await this.page.goto('https://www.ss.lv/');
    }
    
    async clickCourses() {
        await this.coursesLink.click();
    }
}