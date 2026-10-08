import { AsideMenu } from '../asideMenu/AsideMenu';
import '../../../src/styles/blocks/header.scss';
import '../../../src/styles/blocks/top_bar.scss';
import '../../../src/styles/blocks/icons.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="top-bar">
          <a href="#" className="top-bar__logo">
            <img
              src="/src/images/icons/MyBiKE_logo_white.png"
              alt="MyBiKE logo"
            />
          </a>
          <div className="top-bar__icons">
            <a
              href="tel:+1 234 555-55-55"
              className="top-bar__icons icon icon--phone"
            ></a>
            <a href="#menu" className="top-bar__icons icon icon--menu"></a>
            <AsideMenu />
          </div>
        </div>
        <div className="header__bottom">
          <h1 className="header__title">Take the Streets</h1>
        </div>
      </div>
    </header>
  );
};
