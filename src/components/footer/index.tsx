import { FooterProps } from '../../lib/types';
import styles from './index.module.scss';

const Footer = ({ version }: FooterProps) => {
  return (
    <footer className={styles.container}>
      <p>Made with ♡ by Athena | Build v{version}</p>
    </footer>
  );
};

export default Footer;
