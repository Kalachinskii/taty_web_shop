import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.css";

export function Button({ children, apperant }: ButtonProps) {
    return (
        <button
            className={`${styles.btn} ${
                apperant == "small" ? styles.small : styles.big
            }`}
            onClick={() => alert("переход в каталог")}
        >
            {children}
        </button>
    );
}
