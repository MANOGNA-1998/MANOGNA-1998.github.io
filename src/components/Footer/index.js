import styles from "./footer.module.css";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_side}>
          <div className={styles.nav_items}>
          <p className={styles.title_col}>Contact</p>
            <ul>
              <li><span className={styles.nav_links}>Email: n2manu@gmail.com</span></li>
            </ul>
          </div>
        </div>

        {/* <div className={styles.center_side}>
          </ul>

        </div> */}

        <div className={styles.right_side}>
          <div className={styles.links}>
            <p className={styles.title_col}>Links</p>
            <ul>
              <a target="blank" href="https://www.linkedin.com/in/manognavanam/"><li>LinkedIn</li></a>
              <a target="blank" href="https://github.com/"><li>Github</li></a>
              <a href="a"><li>Email</li></a>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.message}>
      <span className={styles.line}/>
        {/* <p>Made with ❤️ by FernaandoJr :)</p> */}
      </div>
    </>
  );
}

export default Footer;
