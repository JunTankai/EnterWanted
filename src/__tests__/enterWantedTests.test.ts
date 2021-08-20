import { EnterPage } from "./pageObjects/enterWantedPageObjects";

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const ent = new EnterPage(driver);

describe("Testing Input Fields", () => {
  beforeAll(async () => {
   await ent.navigate(ent.url);
   });
  afterAll(async () => {
   await ent.quit();
 });


 //Jira Test Case https://dmutah.atlassian.net/browse/JT4DL-27
 test("Input Fields Only Accept Within Paramaters", async () => {
await ent.sendKeys(ent.header, "helloooooo");
await ent.sendKeys(ent.mke, "hey");
await ent.sendKeys(ent.oai, "123456789");
await ent.sendKeys(ent.name, "Jun");
await ent.sendKeys(ent.sex, "M");
await ent.sendKeys(ent.race, "A");
await ent.sendKeys(ent.height, "509");
await ent.sendKeys(ent.weight, "140");
await ent.sendKeys(ent.hair, "black");
await ent.sendKeys(ent.offense, "murder");
await ent.sendKeys(ent.dateOfWarrant, "08182021");
await ent.sendKeys(ent.driversLicense, "12345");
await ent.sendKeys(ent.dlState, "CA");
await ent.sendKeys(ent.dlExpDate, "11151995");
await ent.sendKeys(ent.licensePlate, "098765");
await ent.sendKeys(ent.licenseState, "CA");
await ent.sendKeys(ent.licenseYear, "2021");
await ent.click(ent.submitBtn);

 });

test("Enter Wanted Should Return Error Message When Inputs Are Outside Paramaters", async () => {
  await ent.sendKeys(ent.header, "hi");
  await ent.sendKeys(ent.mke, "whatsup");
  await ent.sendKeys(ent.oai, "0");
  await ent.sendKeys(ent.name, "GiannisSinaUgoAntetokounmpo343434");
  await ent.sendKeys(ent.sex, "male");
  await ent.sendKeys(ent.race, "African");
  await ent.sendKeys(ent.height, "1000");
  await ent.sendKeys(ent.weight, "14000");
  await ent.sendKeys(ent.hair, "B");
  await ent.sendKeys(ent.offense, "BeingAGreekFreakAtBasketball");
  await ent.sendKeys(ent.dateOfWarrant, "0819202121");
  await ent.sendKeys(ent.driversLicense, "12345678910123456789012");
  await ent.sendKeys(ent.dlState, "California");
  await ent.sendKeys(ent.dlExpDate, "111519959595");
  await ent.sendKeys(ent.licensePlate, "098765888888888");
  await ent.sendKeys(ent.licenseState, "Greece");
  await ent.sendKeys(ent.licenseYear, "20212021");
  await ent.click(ent.submitBtn);
  expect(await ent.getText(ent.errorMsg)).toContain("Errors Received:");

});

});
