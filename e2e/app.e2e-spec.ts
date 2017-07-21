import { Ng99Page } from './app.po';

describe('ng99 App', () => {
  let page: Ng99Page;

  beforeEach(() => {
    page = new Ng99Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
