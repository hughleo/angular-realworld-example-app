import { browser, element } from 'protractor';
import { ElementFinder } from 'protractor/built/element';

export class ElementWrapper extends ElementFinder {

  constructor(elem: ElementFinder) {
    super(elem.browser_, elem.elementArrayFinder_);
  }

  async jsClick() {
    await browser.executeScript('arguments[0].click();', super.getWebElement());
  }

}
