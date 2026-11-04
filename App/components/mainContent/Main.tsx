import { About } from './about/about';
import { Contacts } from './contacts/constacts';
import { Details } from './details/details';
import { ProductCard } from './productCard/productCard';
import '../../../src/styles/blocks/main.scss';

export const MainContent = () => {
  return (
    <main className="main">
      <div className="main__content">
        <About />
        <ProductCard />
        <Details />
        <Contacts />
      </div>
    </main>
  );
};
