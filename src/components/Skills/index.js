// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./skills.module.css";
import {SkillButton, SkillButtonSimple, SkillButtonLogo} from "../SkillButton";

function Skills() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}># I am good at</span>
        <div className={styles.group}>

          <SkillButton icon="python-light" skill="Python" />
          <SkillButton icon="java-dark" skill="Java" />
          <SkillButton icon="javascript" skill="Javascript" />
        
          <SkillButton icon="cpp" skill="C++" />
          <SkillButton icon="html" skill="HTML" />
          <SkillButton icon="css" skill="CSS" />
          <SkillButton icon="c" skill="C" />

          <SkillButton icon="mysql-dark" skill="MySQL" />
          <SkillButton icon="nodejs-dark" skill="NodeJS" />
          <SkillButton icon="php-dark" skill="PHP" />
          
          <SkillButton icon="tensorflow-dark" skill="Tensorflow" />
          <SkillButton icon="react-dark" skill="React" />
          <SkillButtonSimple icon="django" skill="Django" />
          <SkillButtonSimple icon="apachekafka" skill="Apache Kafka" />
          <SkillButton icon="spring-dark" skill="Spring" />
          
          <SkillButtonLogo icon="docker" skill="Docker" />
          <SkillButton icon="github-dark" skill="GitHub" />
        </div>
      </div>
    </>
  );
}

export default Skills;
