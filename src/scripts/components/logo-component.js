import makeComponent from '../factories/make-component';

const logoComponent = ({ element, className }) => {
  const logo = makeComponent({ element, className });

  return { logo };
};

export default logoComponent;
