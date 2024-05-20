import Link from "next/link";
import styles from "../styles/Nav.module.css";

const NavLinks = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_wrapper}>
        <button>PYB</button>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
