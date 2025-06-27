import { About } from "../shared/ui/About/About";
import { Catalog } from "../shared/ui/Catalog/Catalog";
import { Footer } from "../shared/ui/Footer/Footer";
import Header from "../shared/ui/Header/Header";
import Map from "../shared/ui/LeafletMap/LeafletMap";
import { MarqueeLeftRight } from "../shared/ui/MarqueeLeftRight/MarqueeLeftRight";
import { MarqueeRightLeft } from "../shared/ui/MarqueeRightLeft/MarqueeRightLeft";
import Reviews from "../shared/ui/Reviews/Reviews";
import { TopCarousel } from "../shared/ui/TopCarousel/TopCarousel";
import { Trend } from "../shared/ui/Trend/Trend";
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
