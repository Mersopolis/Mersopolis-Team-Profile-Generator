class EmployeeList {
  constructor(children = []) {
    this.children = children;
  }
  render() {
    throw new Error('Child class must implement a render() method.');
  }
  renderInnerHtml() {
    console.log(this.children);
    // Loop over children and convert any children that aren't strings to an
    // html string by calling its render method.
    return this.children
      .map((child) => {
        console.log(child);
        return child.render();
      })
      .join('');
  }
}

module.exports = EmployeeList;
