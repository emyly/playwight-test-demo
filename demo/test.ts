import { expect, test } from "@playwright/test";
import { chromium } from "playwright";
import { TestOperationPanel } from "./TestOperationPanel";
import { judgeSystem } from "./config";
let testOperation: TestOperationPanel, browser, page, context;
test.describe("Playright-demo", async function () {
	test.beforeAll(async ({ browserName }, testConfig) => {
		const launch = await judgeSystem();
		browser = await chromium.launch(launch);
		context = await browser.newContext();
		page = await context.newPage();
		testOperation = new TestOperationPanel(page);
	});

	test.beforeEach(async function () {
		await testOperation.goTestUrl("http://www.baidu.com");
	});

	test("搜索Playwright", async function () {
		const result = await testOperation.searchContent("playwright");
		expect(result).toMatch(/^playwright/);
	});

	test.afterAll(async function ({ browser }) {
		await browser.close();
	});
});
