// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./banner.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Banner() {
  var ocupacao = "Software Engineering and Machine Learning enthusiast";
  const [typewriter_text] = useTypewriter({
    words: [
      "Development",
      "AI",
      "Coffee",
      "Travelling",
    ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 110,
  });

  return (
    <div className={styles.container} id='home'>
      <div className={styles.text_parent}>
        <h1 className={styles.title}>
          Hi, I am <span className={` ${styles.title}`}>Manogna!</span>
        </h1>
        <h3 className={`${styles.typewriter} `}>
          {" "}
          In love with {" "}
          <span className={`${styles.typewriter}`}>
            <span className={styles.animated_gradient}>{typewriter_text}</span>
            <Cursor cursorStyle="|"/>
          </span>
        </h3>
          <h3 className={`${styles.subtitle}`}>{ocupacao}</h3>

      </div>
    </div>
  );
}

export default Banner;
