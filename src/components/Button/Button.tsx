import { ButtonProps } from "./Button";
import styles from "./Button.module.css";

export function Button({ children }: ButtonProps) {
    return (
        <button
            className={styles.btn}
            onClick={() => alert("переход в каталог")}
        >
            {children}
        </button>
    );
}
