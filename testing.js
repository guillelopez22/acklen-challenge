// declarations
const { Builder, by, Key, util} = require('selenium-webdriver');

async function testConnection() {
    // define browser driver
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://www.shino.de/parkcalc/');
    await driver.getTitle().then(function(title) {
        console.log(title);
        driver.quit();
    })
}

testConnection()