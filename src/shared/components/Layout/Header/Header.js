import styles from './Header.module.css';
import Navlink from './Navlink';

const Header = () => {
  return (<header className={styles.header}>
    <nav>
      <ul>
        <li>
          <Navlink to="/" label="Inicio"/>
        </li>
      </ul>
    </nav>
  </header>)
}

export default Header;
