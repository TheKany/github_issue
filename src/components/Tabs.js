import styles from './Tabs.module.css';
import cx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const tabList = [
  { name: 'Code', pathname: '/code' },
  { name: 'Issues', pathname: '/issue' },
  { name: 'Pull Request', pathname: '/pulls' },
  { name: 'Actions', pathname: '/actions' },
  { name: 'Project', pathname: '/projects' },
  { name: 'Wiki', pathname: '/wiki' },
  { name: 'Security', pathname: '/security' },
  { name: 'Insights', pathname: '/insight' },
  { name: 'Settings', pathname: '/setting' },
];

const Tab = ({ item, number, selected }) => {
  return (
    <li>
      <Link to={item.pathname}>
        <button className={cx(styles.tab, { [styles.selected]: selected })}>
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  );
};

const Tabs = () => {
  const { pathname } = useLocation();

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab) => {
        return (
          <Tab
            key={tab.name}
            item={tab}
            selected={(pathname === '/' ? '/issue' : pathname) === tab.pathname}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;
