

const timeout = process.env.SLOWMO ? 30000 : 20000;

beforeAll(async () => {
    page.setBypassCSP(true)
    await page.goto('http://localhost:5000/', {waitUntil: 'domcontentloaded'});
});

describe('seed data test', () => {
    test('random node graph', async () => {
        const version = await page.browser().version();
        console.log(version)
        
        await page.waitFor(1000);
        await page.click("#acceptAgreement")
        await page.waitFor(3000);
        
        page.on("console", a => {
            console.log(a);
        });

        await page.waitForSelector('#data-files');
        await page.waitFor(2000);

        const inputUploadHandle = await page.$('#data-files');
        let fileToUpload = 'test_to_upload.gif';

        inputUploadHandle.uploadFile(fileToUpload);

        await page.waitFor(5000);

    }, timeout);
});