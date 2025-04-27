import styles from "./skillsbtn.module.css";
import { Icon } from "@iconify-icon/react";

function SkillButton(props) {
  return (
    <>
      <div className={styles.btn}>
        <Icon icon={`skill-icons:${props.icon}`} className={styles.icon} />
        {props.skill}
      </div>
    </>
  );
}

function SkillButtonSimple(props) {
  return (
    <>
      <div className={styles.btn}>
        <Icon icon={`simple-icons:${props.icon}`} className={styles.icon} />
        {props.skill}
      </div>
    </>
  );
}

function SkillButtonLogo(props) {
  return (
    <>
      <div className={styles.btn}>
        <Icon icon={`logos:${props.icon}`} className={styles.icon} />
        {props.skill}
      </div>
    </>
  );
}

export {
  SkillButton,
  SkillButtonSimple,
  SkillButtonLogo,
}
