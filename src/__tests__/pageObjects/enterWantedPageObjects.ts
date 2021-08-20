import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"

export class EnterPage extends BasePage {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";


// Enter Wanted Input Field Locators

header: By = By.xpath('//input[@name="hdrInput"]')

mke: By = By.xpath('//input[@name="mkeInput"]')

oai: By = By.xpath('//input[@name="oriInput"]')

name: By = By.xpath('//input[@name="namInput"]')

sex: By = By.xpath('//input[@name="sexInput"]')

race: By = By.xpath('//input[@name="racInput"]')

height: By = By.xpath('//input[@name="hgtInput"]')

weight: By = By.xpath('//input[@name="wgtInput"]')

hair: By = By.xpath('//input[@name="haiInput"]')

offense: By = By.xpath('//input[@name="offInput"]')

dateOfWarrant: By = By.xpath('//input[@name="dowInput"]')

driversLicense: By = By.xpath('//input[@name="olnInput"]')

dlState: By = By.xpath('//input[@name="olsInput"]')

dlExpDate: By = By.xpath('//input[@name="olyInput"]')

licensePlate: By = By.xpath('//input[@name="licInput"]')

licenseState: By = By.xpath('//input[@name="lisInput"]')

licenseYear: By = By.xpath('//input[@name="liyInput"]')

submitBtn: By = By.xpath('//button[@id="saveBtn"]')

clearBtn: By = By.xpath('//button[@id="clearBtn"]')

errorMsg: By = By.xpath('//p[@id="validHeader"]')


}