import { Outlet, Link } from "react-router-dom";
import styles from './layout.module.css'
import Tooltip from "../components/Tooltip";

const Layout = () => {
  return (
    <>
        <header>
            <aside className={styles.nameholder}><span>Niraj Sangroula</span></aside>
            <section className={styles.iconholder}>
                <Tooltip text={'+1-647-979-3570'}>
                    <span><i className="fa-solid fa-phone"></i></span>
                </Tooltip>
                <Tooltip text={'sangroulaniraj15@gmail.com'}>
                    <span><i className="fa-solid fa-envelope"></i></span>
                </Tooltip>
                <span><a href="https://www.linkedin.com/in/niraj-sangroula-809947238/"><i className="fa-brands fa-linkedin"></i></a></span>
            </section>
        </header>
        <hr/>
        <Outlet />
    </>
  )
};

export default Layout;