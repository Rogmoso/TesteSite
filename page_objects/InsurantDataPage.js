const { By } = require('selenium-webdriver');

class InsurantDataPage {
    constructor(driver) {
        this.driver = driver;
    }

    async fillInsurantData() {
        await this.driver.findElement(By.id('firstname')).sendKeys('Marcia');
        await this.driver.findElement(By.id('lastname')).sendKeys('Goncalves');
        await this.driver.findElement(By.id('birthdate')).sendKeys('05/08/1982');
        await this.driver.findElement(By.id('streetaddress')).sendKeys('Estrada Sao judas, 1973');
        await this.driver.findElement(By.id('country')).sendKeys('Brazil');
    }

    async clickNext() {
        const nextButton = await this.driver.findElement(By.id('nextenterproductdata'));
        await nextButton.click();
    }
}

module.exports = InsurantDataPage;
