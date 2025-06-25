import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
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
            <div className={styles.cardBox}>
                <Swiper
                    modules={[Pagination]}
                    // можно двигать курсором
                    grabCursor={true}
                    // начинать с карточки index
                    initialSlide={1}
                    // центрилизовать
                    // centeredSlides={true}
                    // растановка карточек
                    slidesPerView="auto"
                    speed={100}
                    slideToClickedSlide={true}
                    // двигать слайдер при фиксации между карточкой
                    pagination={{
                        clickable: true,
                    }}
                    // растояние между карточками
                    breakpoints={{
                        // Мобильные (горизонтальные/планшеты)
                        480: {
                            spaceBetween: 20,
                            // slidesPerView: 1.5,
                        },

                        // Планшеты
                        768: {
                            spaceBetween: 24,
                            // slidesPerView: 2.3,
                        },

                        // Ноутбуки
                        1024: {
                            spaceBetween: 32,
                            // slidesPerView: 3.2,
                        },

                        // Большие экраны
                        1440: {
                            spaceBetween: 40,
                            // slidesPerView: 4.3,
                        },

                        // Full HD+
                        1920: {
                            spaceBetween: 48,
                            // растояние карточек
                            slidesPerView: 4,
                        },
                    }}
                >
                    {[1, 2, 3, 4, 5, 6].map((el, id) => (
                        <SwiperSlide className={styles.swiperSlide} key={id}>
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
