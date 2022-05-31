import os from "os";
import fs from "fs";
/**
 * 判断操作系统决定lanuch条件
 * @returns
 */
export function judgeSystem() {
	const osType = os.type();
	if (osType === "Linux") {
		/**Linux系统下测试浏览器的配置 */
		return {
			headless: true,
		};
	}

	if (osType === "Darwin") {
		/**macOS系统下测试浏览器的配置 */
		return {
			headless: false,
			executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
			// devtools: true,
		};
	}

	if (osType === "Windows_NT") {
		/**windows系统下测试浏览器的配置 */
		// return {
		//     // devtools: true
		// }
	}
}
