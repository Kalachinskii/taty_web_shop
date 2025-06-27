import styles from "./reviews.module.css";

export default function Reviews() {
    return (
        <div className={styles.reviews}>
            <img
                className={styles.img}
                src="/img/avatar/face.jpg"
                alt="Аватарка пользователя"
            />
            <p className={styles.text}>
                Заказал первый раз, заказ пришёл во время, упаковано
                все отлично, все заказанное соответствует описанию, но есть один
                маленький ньюанс, коробки все мятые, толи при упаковке
                так случилось толи на складе так отномятся с товаром, в целом
                всем доволен, буду заказывать ещё, сайт-магазин рекомендую
                к покупкам, в целом всем доволен, буду заказывать ещё
            </p>
            <div className={styles.logoLink}>
                <img
                    className={styles.logoIcon}
                    src="/img/avatar/login_logo_coment.png"
                    alt="Иконка"
                />
                <p className={styles.logoName}>@Velli7350</p>
            </div>
        </div>
    );
}
