const Header = require('../lib/header.js');
const {  } = require('../lib/');

describe('Header', () => {
  test('should render header with the date', () => {
    const expectedHtml = [
      '<header class="header">',
      `<h1>${title}'s Team</h1>`,
      '</header>',
    ].join('');
    const header = new Header();
    expect(header.render()).toEqual(expectedHtml);
  });
});
