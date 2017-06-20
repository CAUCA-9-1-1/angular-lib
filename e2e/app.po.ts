import { browser, element, by } from 'protractor';

export class CauseLibPage {
  navigateTo() {
    return browser.get('/');
  }

  getTestHttpService() {
    return element(by.css('cause-demo button#http-service'));
  }

  getCauseMultilang() {
    return element(by.css('cause-demo cause-multilang'));
  }
}
