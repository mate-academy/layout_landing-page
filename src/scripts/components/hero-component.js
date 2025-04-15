import makeComponent from '../factories/make-component.js';
import headerComponent from './header-component.js';

const heroComponent = () => {
  const hero = makeComponent({ element: 'div', className: 'hero' });
  const { header } = headerComponent({
    element: 'header',
    className: 'header',
  });

  hero.appendChild(header);
  document.getElementById('app').appendChild(hero);
};

export default heroComponent;
