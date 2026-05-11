import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            {/* NavLink sets the class active to the anchor created from the component (in the end it is an anchor still) */}
            <NavLink to={"/pricing"}>Pricing</NavLink>
          </li>
          <li>
            <NavLink to={"/product"}>Product</NavLink>
          </li>
          <li>
            <NavLink to={"/login"} className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
