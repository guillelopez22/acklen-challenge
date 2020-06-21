// declarations
const { Builder, By, Key, util } = require('selenium-webdriver');
const assert = require('assert');
const AssertionError = require('assert').AssertionError;

async function parkingCalculatorTests() {
    // define browser driver
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://www.shino.de/parkcalc/');
    await driver.getTitle().then(function (title) {
        console.log(title);
        console.log('Successful connection to site');
    })

    // getting select options
    let options = [];
    await driver.findElement(By.name('ParkingLot')).then(async function (element) {
        await element.findElements(By.tagName('option')).then(async function (optionArray) {
            for (let index = 0; index < optionArray.length; index++) {
                await optionArray[index].getAttribute('value').then(function(value) {
                    options.push(value)
                })
            }
        })
    })

    await driver.findElement(By.css("img[alt='Pick a date']")).click();





    

    driver.quit();
}




parkingCalculatorTests()