const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    page.on("console", a => {
        console.log(a);
    });
    await page.setContent(`
      <input type='file'></input>
      <script>
      console.log('helloooo');
        
      document.body.querySelector('input').addEventListener('change', e => {
        console.log('inside');
          debugger;
          const files = e.currentTarget.files;
          if (files) {
            console.log(files[0].size);
          }
        });
      
        console.log('byeee');
      </script>
    `);
    await page.emulate({ viewport: { width: 1440, height: 900 }, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36" });

    const fileUploaders = await page.$$("input[type=file]");

    

    await fileUploaders[0].uploadFile(`test_to_upload.gif`);
    await page.waitFor(2000);

    browser.close();
})();