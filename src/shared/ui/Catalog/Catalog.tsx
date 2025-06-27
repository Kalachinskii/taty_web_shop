import styles from "./Catalog.module.css";

export function Catalog() {
    const catalogNamesArr = [
        "Тату наборы",
        "Держатели",
        "Тату машинки",
        "Педали и провода",
        "Краски",
        "Блоки питания",
        "Наконечники",
        "Тату иглы",
        "Защита, ёмкости, расходники",
        "Аксессуары",
        "Принтеры и планшеты",
    ];

    return (
        <div className={styles.catalog}>
            <h1 className={styles.title}>Каталог</h1>
            <div className={styles.catalogBox}>
                {catalogNamesArr.map((title, id) => (
                    <div key={id} className={styles.box}>
                        <h2 className={styles.titleBox}>{title}</h2>
                        <div className={styles.imgBox}>
                            <img
                                className={styles.img}
                                src={`/img/catalog/${id}.webp`}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
