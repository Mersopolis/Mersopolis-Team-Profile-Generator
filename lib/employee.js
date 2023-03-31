const Component = require('./component.js');

class Employee extends Component {
  constructor(children,  = false) {
    super(children);
    this. = ;
  }
  render() {
    let classNames = '';
    if (this.) {
      classNames += ' ';
    }
    return `<li class="${classNames}">${this.renderInnerHtml()}</li>`;
  }
}

module.exports = Employee;
