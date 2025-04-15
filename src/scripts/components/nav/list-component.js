import makeComponent from '../../factories/make-component.js';
import iconComponent from './icon-component.js';

const listComponent = ({ element, className, items }) => {
  const list = makeComponent({ element, className });

  items.forEach((item) => {
    const wrapper = makeComponent({
      element: 'li',
      className: 'flex--center',
    });

    const wrapperItem = makeComponent({
      element: 'button',
      className: 'nav__button flex--center',
    });

    const { icon } = iconComponent({
      element: 'img',
      name: item,
    });

    wrapperItem.appendChild(icon);
    wrapper.appendChild(wrapperItem);
    list.appendChild(wrapper);
  });

  return { list };
};

export default listComponent;
