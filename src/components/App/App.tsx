import { Catalog } from "../Catalog/Catalog";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import { TopCarousel } from "../TopCarousel/TopCarousel";
import { Trend } from "../Trend/Trend";
import styles from "./App.module.css";

export function App() {
    return (
        <div className={styles.container}>
            <Header />
            <TopCarousel />
            <Trend />
            <Catalog />
            <Footer />
        </div>
    );
}
