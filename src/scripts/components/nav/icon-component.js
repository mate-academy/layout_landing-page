import makeComponent from '../../factories/make-component.js';

const data = ({ name, sharedClass }) => ({
  className: `${sharedClass} ${sharedClass}--${name}`,
  src: `/assets/icons/${name}.png`,
});

const iconComponent = ({ element, name }) => {
  const sharedClass = 'nav__icon';
  const { className, src } = data({ name, sharedClass });

  const icon = makeComponent({
    element,
    className,
    src,
    alt: name,
  });

  return { icon };
};

export default iconComponent;
