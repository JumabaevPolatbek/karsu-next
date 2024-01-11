import styles from "./MapLocation.module.scss";

function MapLocation() {
  return (
    <div className={styles["location"]}>
      <div className="container">
        <h2 className={styles["title"]}>
          Места в Санкт- Петербурге, где можно поучиться:
        </h2>
        <div className={styles["map"]}>
          <img src="./images/map.png" alt="map" />
          {/* Usı jerde súwrettiń ornına karta qoyılıwı kerek */}
        </div>
      </div>
    </div>
  );
}

export default MapLocation;