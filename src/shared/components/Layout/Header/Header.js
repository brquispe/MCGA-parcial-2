import styles from './Header.module.css';
import Navlink from './Navlink';

const Header = () => {
  return (<header className={styles.header}>
    <navbar>
      <ul>
        <li>
          <Navlink to="/" label="Inicio"/>
        </li>
      </ul>
    </navbar>
  </header>)
}

export default Header;
