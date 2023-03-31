const Component = require('./component.js');

class EmployeeList extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `<ul class="tasks">${this.renderInnerHtml()}</ul>`;
  }
}

module.exports = EmployeeList;
