import { test as base} from '@playwright/test'

type TestData = {
    link: string;
};

export const test = base.extend<{ testData: TestData }>({
    testData: async ({}, use) => {
        const testData = {
            link: '/work/courses-education/',
        };
            await use(testData);
        },
    });