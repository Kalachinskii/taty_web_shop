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
                    <a href="#" className={styles.btn}>
                        Смотреть каталог
                    </a>
                </div>
            </div>
        </div>
    );
}
