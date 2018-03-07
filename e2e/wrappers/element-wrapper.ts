import { browser, element } from 'protractor';
import { ElementFinder } from 'protractor/built/element';

export class ElementWrapper extends ElementFinder {

  constructor(elem: ElementFinder) {
    super(elem.browser_, elem.elementArrayFinder_);
  }

  async hover() {
    await browser.actions().mouseMove(super.getWebElement());
  }


  // create a clear and send keys method
 

}
