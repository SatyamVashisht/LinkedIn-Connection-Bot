const puppeteer = require("puppeteer");
let username = "satyamsharma1987@gmail.com";
let password = "72147214";
let idx;
async function linkedin(url) {
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        slowMo: 10,
        //    executablePath: 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
    })
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto(url, { waitUntil: "networkidle2" });
    await tab.waitForTimeout(3000);
    await tab.type('#session_key', username, { delay: 100 });
    await tab.type("#session_password", password, { delay: 100 });`cc`
    await tab.click(".sign-in-form__submit-button");
    for(let i=0;i<80;i++){
        await tab.waitForTimeout(3000);
        await tab.goto("https://www.linkedin.com/in/tanaypratap/", { waitUntil: "networkidle2" });
        await tab.waitForTimeout(3000);
        await tab.waitForSelector(".pv-pymk-section__member-cta-button",{visible:true});
        let element = await tab.$$('.pv-pymk-section__member-cta-button');
        for(let j = 0 ; j< element.length ; j++){
            let connect = element[j];
            await connect.click();
            await tab.waitForTimeout(1000);
        }
        await tab.waitForTimeout(3000);
    }
    
    // console.log(element.length);
    // for(let i = 0 ; i < 10 ; i++){/
    // }



}
linkedin("https://www.linkedin.com/");


