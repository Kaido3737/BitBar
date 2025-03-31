import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>🍸 Bit Bar</h1>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#about">About</a>
      </nav>
    </div>
  );
};

export default Header;