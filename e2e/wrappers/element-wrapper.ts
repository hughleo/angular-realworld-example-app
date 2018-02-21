import {browser, ExpectedConditions as EC, element} from 'protractor';
import { ElementFinder } from 'protractor/built/element';
import { ExpectedConditions } from 'protractor';
import { Locator } from 'protractor/built/locators';

export class ElementWrapper extends ElementFinder {

  constructor(elem: ElementFinder) {
    super(elem.browser_, elem.elementArrayFinder_);
  }

  async jsClick() {
    await browser.executeScript('arguments[0].click();', super.getWebElement());
  }

  async clearAndSendKeys(keys: string) {
    await super.getWebElement().clear();
    await super.getWebElement().sendKeys(keys);
  }
}
