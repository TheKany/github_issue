import React from 'react';

import styles from './styles/css/Footer.module.css';

const footerItems = [
  {
    title: 'Terms',
    link: `https://docs.github.com/en/site-policy/github-terms/github-terms-of-service`,
  },
  {
    title: 'Privacy',
    link: `https://docs.github.com/ko/site-policy/privacy-policies/github-privacy-statement`,
  },
  {
    title: 'Security',
    link: `https://github.com/security`,
  },
  {
    title: 'Status',
    link: `https://www.githubstatus.com/`,
  },
  {
    title: 'Docs',
    link: `https://docs.github.com/ko`,
  },
  {
    title: 'Contact GitHub',
    link: `https://support.github.com/?tags=dotcom-footer`,
  },
  {
    title: 'Pricing',
    link: `https://github.com/pricing`,
  },
  {
    title: 'API',
    link: `https://docs.github.com/ko`,
  },
  {
    title: 'Training',
    link: `https://github.com/services/`,
  },
  {
    title: 'Blog',
    link: `https://github.blog/`,
  },
  {
    title: 'About',
    link: `https://github.com/about`,
  },
];

const Footer = () => {
  return (
    <>
      <ul className={styles.footer}>
        <li className={styles.item}>
          <span>© 2023 KkanCloneCoding GitHub.</span>
        </li>
        {footerItems.map(({ title, link }) => {
          return (
            <li className={styles.item} key={title}>
              <a className={styles.itemLink} href={link}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Footer;
