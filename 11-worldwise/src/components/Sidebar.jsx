import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./SideBar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
