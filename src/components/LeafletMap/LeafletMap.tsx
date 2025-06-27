import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import L from "leaflet";

export default function Map() {
    const mapRef = useRef(null); // Ref для контейнера карты
    const mapInstance = useRef(null); // Сохраняем экземпляр карты
    const markerRef = useRef(null); // Ref для маркера
    const center = [55.751244, 36.618423];
    const zoom = 13;

    useEffect(() => {
        // Если карта уже инициализирована
        if (!mapRef.current || mapInstance.current) return;
        // Маркер - иконка
        const customIcon = L.icon({
            iconUrl: "img/logoMap.png",
            iconSize: [64, 64],
        });

        // Инициализация карты
        mapInstance.current = L.map(mapRef.current, {
            // убрать {} если нужен скрол
            scrollWheelZoom: false,
        }).setView(center, zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            // Запрещает повторение тайлов
            noWrap: true,
            // Обновляет только при остановке движения
            updateWhenIdle: true,
        }).addTo(mapInstance.current);

        // Добавление маркера
        markerRef.current = L.marker(center, { icon: customIcon })
            .addTo(mapInstance.current)
            .bindPopup("Mr.Driskell!")
            .openPopup();

        // Очистка при размонтировании
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}
