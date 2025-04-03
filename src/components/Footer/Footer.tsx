import styles from "./Footer.module.css";

export function Footer() {
    return (
        // <div className={styles.container}>
        <div className={styles.footer}>
            <div className={styles.centerBox}>
                <div className={styles.leftBox}>
                    <div className={styles.logoBox}>
                        <div className={styles.logo}>
                            <img src="/img/logo.svg" alt="" />
                        </div>
                        <p>Политика конфенедциальности</p>
                    </div>
                    <div className={styles.links}>
                        <a className={styles.link} href="#">
                            Промокоды
                        </a>
                        <a className={styles.link} href="#">
                            Скидки
                        </a>
                        <a className={styles.link} href="#">
                            Помощь
                        </a>
                        <a className={styles.link} href="#">
                            О нас
                        </a>
                        <a className={styles.link} href="#">
                            {" "}
                            Контакты
                        </a>
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.linksBox}>
                        <p>8 800 600-61-91</p>
                        <a className={styles.linkIcon} href="#">
                            <i className={`fa-brands fa-telegram`}></i>
                        </a>
                        <a className={styles.linkIcon} href="#">
                            <i className={`fa-brands fa-viber`}></i>
                        </a>
                        <a className={styles.linkIcon} href="#">
                            <i className={`fa-brands fa-whatsapp`}></i>
                        </a>
                    </div>
                    <p>Время работы: с 9:00 до 20:00 по мск</p>
                    <div className={styles.mailBox}>
                        <img src="/img/icon/Union.svg" alt="" />
                        <p>Mr.Driskell@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
