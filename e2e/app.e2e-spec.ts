import { Ng2PracticePage } from './app.po';

describe('ng2-practice App', function() {
  let page: Ng2PracticePage;

  beforeEach(() => {
    page = new Ng2PracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
