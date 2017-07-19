import { ProjectShoppingPage } from './app.po';

describe('project-shopping App', () => {
  let page: ProjectShoppingPage;

  beforeEach(() => {
    page = new ProjectShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
