import { Card } from "../Card/Card";
import styles from "./Trend.module.css";

export function Trend() {
    const trendLink = [
        "Хиты продаж",
        "Самые популярные",
        "Новые поступления",
        "Акционные товары",
    ];

    return (
        <>
            <div className={styles.trandBox}>
                {trendLink.map((link, id) => (
                    <a
                        key={id}
                        className={`${styles.link} ${
                            id === 2 ? `${styles.active}` : ``
                        }`}
                        href="#"
                    >
                        {link}
                    </a>
                ))}
            </div>
            <Card />
        </>
    );
}
