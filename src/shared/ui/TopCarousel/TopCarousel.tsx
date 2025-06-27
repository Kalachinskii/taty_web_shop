import { Button } from "../Button/Button";
import styles from "./TopCarousel.module.css";

export function TopCarousel() {
    return (
        <div className={styles.container}>
            <div className={styles.boxCarousel}>
                <div className={styles.box}>
                    <h1 className={styles.title}>
                        Лучшие товары в мире татуировок
                    </h1>
                    <p className={styles.description}>
                        Оборудование и расходники <br /> для самых ярких
                        и качественных работ
                    </p>
                    <Button apperant="big">Смотреть каталог</Button>
                </div>
            </div>
        </div>
    );
}
