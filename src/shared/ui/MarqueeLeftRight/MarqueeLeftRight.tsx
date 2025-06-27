import styles from "./MarqueeLeftRight.module.css";

export function MarqueeLeftRight() {
    return (
        <div className={styles.Marquee}>
            <div className={styles.box}>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="./img/brend/4.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/5.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/6.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/7.webp"
                        alt="картинка логотипа"
                    />
                </div>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="./img/brend/4.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/5.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/6.webp"
                        alt="картинка логотипа"
                    />
                    <img
                        className={styles.img}
                        src="./img/brend/7.webp"
                        alt="картинка логотипа"
                    />
                </div>
            </div>
        </div>
    );
}
