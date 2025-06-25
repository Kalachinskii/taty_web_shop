import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import styles from "./Trend.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
            <div className={styles.cardBox}>
                <Swiper
                    modules={[Pagination]}
                    grabCursor={true}
                    initialSlide={2}
                    centeredSlides={false} // Отключаем центрирование для равномерных отступов
                    slidesPerView="auto"
                    speed={1500}
                    slideToClickedSlide={true}
                    pagination={{ clickable: true }}
                    spaceBetween={140} // Фиксированный отступ между всеми слайдами
                    breakpoints={{
                        320: { slidesPerView: 1.2 }, // Адаптация для мобильных
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                    }}
                    className={styles.swiper}
                >
                    {[1, 2, 4].map((el, id) => (
                        <SwiperSlide key={id} className={styles.slide}>
                            <Card />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.openHitBox}>
                <Button apperant={"small"}>Показать еще</Button>
            </div>
        </>
    );
}
