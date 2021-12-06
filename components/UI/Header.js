import Link from "next/link";
import styles from '../../styles/Header.module.css';

const Header = () => {
  return <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/todo'>Todo</Link>
        </li>
        <li>
          <Link href='/logout'>Logout</Link>
        </li>
      </ul>
    </nav>
  </header>;
};

export default Header;
