import { CauseLibPage } from './app.po';

describe('cause-lib App', () => {
  let page: CauseLibPage;

  beforeEach(() => {
    page = new CauseLibPage();
  });

  it('should have a CAUSE "HttpService"', () => {
    page.navigateTo();
    expect(page.getTestHttpService().getText()).toContain('TEST');
  });

  it('should have a CAUSE "multilang component"', () => {
    page.navigateTo();
    expect(page.getCauseMultilang().isPresent()).toBeTruthy();
  });

});
