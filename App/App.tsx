import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainContent } from './components/mainContent/main';
import '../src/styles/blocks/page.scss';

export const App = () => {
  return (
    <div className="page__body">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
