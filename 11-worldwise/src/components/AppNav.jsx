import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {/* NavLink takes you to another route from the router but without reloading the whole page */}
          <NavLink to="cities">CITIES</NavLink>
        </li>
        <li>
          <NavLink to="countries">COUNTRIES</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
