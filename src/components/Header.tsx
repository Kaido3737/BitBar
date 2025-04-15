import styles from './styles/Header.module.scss';
import logo from './images/logo.gif';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['header']}>
      <h1 className={styles['header__icon']} onClick={() => navigate(`/`)}>
        <img src={logo} alt="Bit Bar Logo" className={styles['header__icon--img']}/>
        <span className={styles['header__icon--text']}>Bit Bar</span>
      </h1>
      <nav className={styles.nav}>
        <a href="" onClick={() => navigate(`/`)}>Home</a>
        <a href="#about">About</a>
      </nav>
    </div>
  );
};

export default Header;