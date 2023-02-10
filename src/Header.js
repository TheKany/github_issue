import styles from './styles/css/Header.module.css';

import logo from './styles/img/logo.svg';

import Button from './components/Button.js';
import Space from './components/Space.js';
import Tabs from './components/Tabs';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerNav}>
          <img src={logo} alt="logo" />
          <span role="button">TheKany</span>
          <span role="button">github_Clone</span>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            style={{
              backgroundColor: 'transparent',
              color: '#24292f',
              fontSize: '12px',
            }}
          >
            Watch
          </Button>
          <Space />
          <Button
            style={{
              backgroundColor: 'transparent',
              color: '#24292f',
              fontSize: '12px',
            }}
          >
            Fork <div className={styles.circle}>2</div>
          </Button>
          <Space />
          <Button
            style={{
              backgroundColor: 'transparent',
              color: '#24292f',
              fontSize: '12px',
            }}
          >
            Star
          </Button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Header;
