import { BootstrapApp2Page } from './app.po';

describe('bootstrap-app2 App', function() {
  let page: BootstrapApp2Page;

  beforeEach(() => {
    page = new BootstrapApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
