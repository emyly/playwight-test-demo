import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
	// Limit the number of workers on CI, use default locally
	workers: 1,
	// Each test is given 60 seconds
	timeout: 60 * 1000,
	// Look for test files in the "tests" directory, relative to this configuration file
	testDir: "./demo",
	reporter: [["html", { outputFolder: "./", open: "always" }]],
	use: {
		launchOptions: {
			headless: false,
			slowMo: 50,
			timeout: 60000,
			// recordVideo:'videos'
			// devtools: true,
		},
		contextOptions: {
			viewport: {
				width: 1400,
				height: 900,
			},
		},
		screenshot: "only-on-failure",
		trace: "retain-on-failure",
		browserName: "webkit",
	},
};

export default config;
