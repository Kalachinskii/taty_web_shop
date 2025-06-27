import styles from "./MarqueeRightLeft.module.css";

export function MarqueeRightLeft() {
    return (
        <div className={styles.Marquee}>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="./img/brend/0.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/1.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/2.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/3.webp"
                        alt="картинка логотипа"
                    />
                </div>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="./img/brend/0.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/1.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/2.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/3.webp"
                        alt="картинка логотипа"
                    />
                </div>
            </div>
        </div>
    );
}
