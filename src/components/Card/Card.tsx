import { Button } from "../Button/Button";
import styles from "./Card.module.css";

export function Card() {
    return (
        <>
            <div className={styles.cardBox}>
                <div className={styles.caruselBox}>
                    <div className={styles.top}>
                        <p className={styles.hit}>Новинка</p>
                        <i
                            className={`${styles.icon_like} fa-solid fa-heart`}
                        ></i>
                    </div>
                    <img
                        className={styles.product_img}
                        src="/img/products/product_one.webp"
                        alt="Картинка товара"
                    />
                </div>
                <div className={styles.product_box_info}>
                    <p className={styles.title}>
                        Нитровиниловые перчатки Wally Plastic S
                    </p>
                    <div className={styles.price}>2037 ₽</div>
                    <Button apperant={"small"}>Купить</Button>
                </div>
            </div>
        </>
    );
}
