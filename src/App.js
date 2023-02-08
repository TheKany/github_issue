import styles from './styles/css/App.module.css';

import Header from './Header';
import ListContainer from './ListContainer';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
};

export default App;
