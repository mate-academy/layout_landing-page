const makeComponent = ({ element, ...args }) =>
  Object.assign(document.createElement(element), args);

export default makeComponent;
