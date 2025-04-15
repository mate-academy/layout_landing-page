import makeComponent from '../factories/make-component.js';
import logoComponent from './logo-component.js';
import navComponent from './nav/nav-component.js';

const headerComponent = ({ element, className }) => {
  const header = makeComponent({ element, className });

  const { logo } = logoComponent({ element: 'div', className: 'header__logo' });
  const { nav } = navComponent({
    element: 'nav',
    className: 'header__nav nav',
  });

  header.append(logo, nav);

  return { header };
};

export default headerComponent;
