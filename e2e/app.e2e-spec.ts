import { BootstrapApp2PagesPage } from './app.po';

describe('bootstrap-app2-pages App', function() {
  let page: BootstrapApp2PagesPage;

  beforeEach(() => {
    page = new BootstrapApp2PagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
