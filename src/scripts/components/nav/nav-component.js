import makeComponent from '../../factories/make-component.js';
import listComponent from './list-component.js';

const navComponent = ({ element, className }) => {
  const nav = makeComponent({ element, className });
  const { list } = listComponent({
    element: 'ul',
    className: 'nav__items',
    items: ['phone', 'burger', 'burger-hover', 'close'],
  });

  nav.appendChild(list);

  return { nav };
};

export default navComponent;
