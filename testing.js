// declarations
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');
let driver = new Builder().forBrowser('firefox').build();
let moment = require('moment');

const today = moment();
let options = [];
let startingDate;
let startingTime;
let startingTimeAMPM;
let leavingDate;
let leavingTime;
let leavingTimeAMPM;
let cost;
let submit;
let parkingTime;


async function connectingToSite() {
    await driver.get('http://www.shino.de/parkcalc/').then(async () => {
        title = await driver.getTitle();

        
        await valetParkingTests();
        await shortTermParkingTests();
        await economyParkingTests();
        await longTermGarageParkingTests();
        await longTermSurfaceParkingTests();
        console.log('Tests executed successfully', title);
        driver.quit();
    }).catch(error => {
        console.log(error);
    });
}

async function getInputs() {
    // select options
    await driver.findElement(By.id('ParkingLot')).then(async function (element) {
        await element.findElements(By.tagName('option')).then(async function (optionArray) {
            options = optionArray;
        });
    });

    // inputs
    startingDate = await driver.findElement(By.id('StartingDate'));
    startingTime = await driver.findElement(By.id('StartingTime'));
    startingTimeAMPM = await driver.findElements(By.name('StartingTimeAMPM'));

    leavingDate = await driver.findElement(By.id('LeavingDate'));
    leavingTime = await driver.findElement(By.id('LeavingTime'));
    leavingTimeAMPM = await driver.findElements(By.name('LeavingTimeAMPM'));
    // cost = await driver.findElement(By.xpath("//td[@class='SubHead']//b")).getText();
    submit = await driver.findElement(By.name('Submit'));

}

async function valetParkingTests() {
    await getInputs();
    options[0].click();
    console.log('Testing parking after 12 hours');
    
    // 12 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/20/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[1].click();

    await submit.click();
    console.log('Total should be $18');
    console.log('0 days, 12 hours, 0 minutes');
    
    
    await driver.get('http://www.shino.de/parkcalc/');
    console.log('Testing parking after 5 hours');
    await getInputs();
    options[0].click();
    // >=5 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/20/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('4:00');
    await leavingTimeAMPM[1].click();

    await submit.click();
    console.log('Total should be $12');
    console.log('0 days, 5 hours, 0 minutes');
}

async function shortTermParkingTests() {
    await getInputs();
    options[1].click();
    console.log('Testing short term parking after 1 hour');
    
    // 1 hour
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/20/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('12:00');
    await leavingTimeAMPM[1].click();
    console.log('Total should be $2');
    console.log('0 days, 1 hours, 0 minutes');
    await submit.click();

    await driver.get('http://www.shino.de/parkcalc/');
    await getInputs();
    options[1].click();
    // 48 hours later
    console.log('Testing short term parking after 48 hours');
    
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/22/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[0].click();
    console.log('Total should be $48');
    console.log('2 days, 0 hours, 0 minutes');

    await submit.click();
}

async function economyParkingTests() {
    await getInputs();
    options[2].click();
    console.log('Testing economy parking after 12 hours');
    
    // 12 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/20/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[1].click();

    await submit.click();
    console.log('Total should be $9');
    console.log('0 days, 12 hours, 0 minutes');
    await driver.get('http://www.shino.de/parkcalc/');
    await getInputs();
    options[2].click();
    // 8 days
    console.log('Testing economy parking after 8 days');
    
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/28/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[0].click();

    await submit.click();
    console.log('Total should be $63');
    console.log('8 days, 0 hours, 0 minutes');
}

async function longTermGarageParkingTests() {
    await getInputs();
    options[3].click();
    console.log('Testing long term garage parking after 12 hours');
    
    // 12 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/20/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[1].click();

    await submit.click();
    console.log('Total should be $12');
    console.log('0 days, 12 hours, 0 minutes');

    await driver.get('http://www.shino.de/parkcalc/');
    await getInputs();
    options[3].click();
    console.log('Testing long term garage parking after 8 days');
    
    // 8 days
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/28/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[0].click();

    await submit.click(); 
    console.log('Total should be $84');
    console.log('8 days, 0 hours, 0 minutes');
}

async function longTermSurfaceParkingTests() {
    await getInputs();
    options[4].click();
    console.log('Testing long term surface parking');
    
    // 12 hours
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/20/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[1].click();

    await submit.click();
    console.log('Total should be $10');
    console.log('0 days, 12 hours, 0 minutes');
    await driver.get('http://www.shino.de/parkcalc/');
    await getInputs();
    options[4].click();
    // 8 days
    console.log('Testing long term surface parking after 8 days');
    
    await startingDate.click();
    await startingDate.clear();
    await startingDate.sendKeys('12/20/2020');

    await startingTime.click();
    await startingTime.clear();
    await startingTime.sendKeys('11:00');
    await startingTimeAMPM[0].click();

    await leavingDate.click();
    await leavingDate.clear();
    await leavingDate.sendKeys('12/28/2020');

    await leavingTime.click();
    await leavingTime.clear();
    await leavingTime.sendKeys('11:00');
    await leavingTimeAMPM[0].click();

    await submit.click(); 
    console.log('Total should be $70');
    console.log('8 days, 0 hours, 0 minutes');
}



// // valet parking testing


connectingToSite();