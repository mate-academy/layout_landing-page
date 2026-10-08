import '../../../src/styles/blocks/nav.scss';
import '../../../src/styles/blocks/menu.scss';

export const Navigation = () => {
  return (
    <nav className="nav menu__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            ABOUT US
          </a>
        </li>
        <li className="nav__item">
          <a href="#products" className="nav__link">
            COMPARE BIKES
          </a>
        </li>
        <li className="nav__item">
          <a href="#details" className="nav__link">
            DETAILS
          </a>
        </li>
        <li className="nav__item">
          <a href="#contacts" className="nav__link">
            CONTACTS
          </a>
        </li>
      </ul>
    </nav>
  );
};
