import { SegelnPage } from './app.po';

describe('segeln App', () => {
  let page: SegelnPage;

  beforeEach(() => {
    page = new SegelnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
