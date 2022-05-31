import { Page } from "playwright";

export class TestOperationPanel {
	protected page: Page;
	constructor(page: Page) {
		this.page = page;
		console.log(page);
	}

	/**
	 * 加载测试的网址
	 */
	goTestUrl = async (url: string) => {
		await this.page.goto(url);
		await this.page.waitForLoadState();
	};

	/**
	 * 搜索指定内容
	 */

	searchContent = async param => {
		await this.page.locator(".s_ipt").fill(param);
		await this.page.locator(".s_ipt").press("Enter");
		await this.page.waitForLoadState();
		const result = await this.page.locator('//div[@id="1"]/h3//em').textContent();
		return result;
	};
}
