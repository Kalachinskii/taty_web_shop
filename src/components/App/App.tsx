import { About } from "../About/About";
import { Catalog } from "../Catalog/Catalog";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import Map from "../LeafletMap/LeafletMap";
import { MarqueeLeftRight } from "../MarqueeLeftRight/MarqueeLeftRight";
import { MarqueeRightLeft } from "../MarqueeRightLeft/MarqueeRightLeft";
import Reviews from "../Reviews/Reviews";
import { TopCarousel } from "../TopCarousel/TopCarousel";
import { Trend } from "../Trend/Trend";
import styles from "./App.module.css";

export function App() {
    return (
        <div className={styles.container}>
            <Header />
            <TopCarousel />
            {/* swiper - переписать под children */}
            <Trend />
            <About />
            <MarqueeRightLeft />
            <MarqueeLeftRight />
            <Catalog />
            {/* swiper - реализовать с children */}
            <div className={styles.comentBox}>
                <Reviews />
            </div>
            {/* Настройка на магазин */}
            <Map />
            <Footer />
        </div>
    );
}
