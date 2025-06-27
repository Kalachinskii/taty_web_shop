import { About } from "@/shared/ui/About/About";
import { Catalog } from "@/shared/ui/Catalog/Catalog";
import Map from "@/shared/ui/LeafletMap/LeafletMap";
import { MarqueeLeftRight } from "@/shared/ui/MarqueeLeftRight/MarqueeLeftRight";
import { MarqueeRightLeft } from "@/shared/ui/MarqueeRightLeft/MarqueeRightLeft";
import Reviews from "@/shared/ui/Reviews/Reviews";
import { TopCarousel } from "@/shared/ui/TopCarousel/TopCarousel";
import { Trend } from "@/shared/ui/Trend/Trend";
import styles from "../home.module.css";

export function Home() {
    return (
        <>
            <TopCarousel />
            <Trend />
            <About />
            <MarqueeRightLeft />
            <MarqueeLeftRight />
            <Catalog />
            <div className={styles.comentBox}>
                <Reviews />
            </div>
            <Map />
        </>
    );
}
