import styles from "./Button.module.css";
export default function Button({isoutline,icon,name,...rest}) {
  return (
    <button
    {...rest}
      className={isoutline ? styles.outline_btn : styles.primary_button}
    >
      {icon}
      {name}
    </button>
  );
}
