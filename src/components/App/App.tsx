import { Catalog } from "../Catalog/Catalog";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
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

            <Trend />

            <div className={styles.comentBox}>
                <Reviews />
                <Reviews />
            </div>

            <MarqueeRightLeft />
            <MarqueeLeftRight />
            <Catalog />
            <Footer />
        </div>
    );
}
