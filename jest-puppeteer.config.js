module.exports = {
    launch: {
        headless: process.env.CI === "true" ? true : false,
        ignoreDefaultArgs: ["--disable-extensions"],
        args: ["--no-sandbox"],
        executablePath: process.env.CI === "true" ? "google-chrome" : ""
    },
    server: {
        command: "npm run start",
        port: 5000,
        launchTimeout: 180000
    }
};