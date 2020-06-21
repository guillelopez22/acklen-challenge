// declarations
const { Builder, By, Key, util} = require('selenium-webdriver');

async function testConnection() {
    // define browser driver
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://www.shino.de/parkcalc/');
    await driver.getTitle().then(function(title) {
        console.log(title);
        console.log('Successful connection to site');
    })

    let parkingLot = await driver.findElement(By.css('#ParkingLot>option:nth-child(1)')).getAttribute('value').then(function(value) {
        console.log(value);
        
    })
    driver.quit();
}



testConnection()