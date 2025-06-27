import { AppRouter } from "./AppRouter";
import styles from "./App.module.css";

export function App() {
    return (
        <div className={styles.container}>
            <AppRouter />
        </div>
    );
}
