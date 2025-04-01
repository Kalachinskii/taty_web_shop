import styles from "./App.module.css";

export function App() {
    return (
        <>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <div className={styles.namber}>
                                <i
                                    className={`${styles.icon} fa-solid fa-phone`}
                                ></i>
                                <p>+7 952 552-52-52</p>
                            </div>
                            <div className={styles.links}>
                                <a className={styles.link} href="#">
                                    Viber
                                </a>
                                <a className={styles.link} href="#">
                                    Whats App
                                </a>
                                <a className={styles.link} href="#">
                                    Telegram
                                </a>
                            </div>
                        </div>
                        {/* <div className={styles.mail}>
                            <img src="/img/icon/Union.svg" alt="" />
                            <p>Mr.Driskell@mail.com</p>
                        </div> */}
                        <div className={styles.logo}>
                            <img src="/img/logo.svg" alt="" />
                        </div>
                        <div className={styles.userInterface}>
                            <div className={styles.cardGrup}>
                                <span className={styles.price}>37 280 ₽</span>
                                <div className={styles.card}>
                                    <i
                                        className={`${styles.icon} fa-solid fa-cart-shopping`}
                                    ></i>
                                    <p className={styles.cardCount}>17</p>
                                </div>
                            </div>
                            <i
                                className={`${styles.icon} fa-solid fa-heart`}
                            ></i>

                            <i
                                className={`${styles.icon} fa-solid fa-user`}
                            ></i>
                        </div>
                    </div>
                    <div className={styles.buttom}>
                        <div className={styles.categoryList}>
                            <h1>Каталог:</h1>
                            <i
                                className={`${styles.icon} fa-solid fa-bars`}
                            ></i>
                        </div>
                        <div className={styles.boxSearch}>
                            <input
                                className={styles.search}
                                type="text"
                                placeholder="Поиск"
                            />
                            <img
                                src="/img/icon/Search.svg"
                                className={`${styles.glass} ${styles.icon} `}
                                alt="Иконка лупы"
                            />
                        </div>
                        <div className={styles.botLinks}>
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
                                Контакты
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
