import { MynewappPage } from './app.po';

describe('mynewapp App', () => {
  let page: MynewappPage;

  beforeEach(() => {
    page = new MynewappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
