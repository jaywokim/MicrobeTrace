module.exports = {
    preset: "jest-puppeteer",
    testTimeout: 30000,
    verbose: true,
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "MicrobeTrace Test Report"
        }]
        
    ]
    // preset: "jest-puppeteer",
    // testMatch: [
    //   "**/test/**/*.test.js",
    //   "/test/**/*.test.js",
    //   "test/**/*.test.js"
    // ],
    // verbose: true
}