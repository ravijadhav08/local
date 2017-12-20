import { AngProjtemplatePage } from './app.po';

describe('ang-projtemplate App', () => {
  let page: AngProjtemplatePage;

  beforeEach(() => {
    page = new AngProjtemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
