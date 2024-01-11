import Image from "next/image";
import styles from "./HeroBanner.module.scss";

function HeroBanner() {
  return (
    <div
      className={styles["hero-banner"]}
      style={{ backgroundImage: "url(/assets/fon-800/city/group_184_5.png)" }}
    >
      <h1 className={styles["hero-title"]}>
        Образование онлайн в Нижнем Новгороде
        <div className={styles["share__btn"]}>
          <Image src="/assets/share.svg" alt="share" />
        </div>
      </h1>
      <p className={styles["hero-text"]}>
        Мы — единая приёмная комиссия вузов и колледжей по программам
        дистанционного обучения
      </p>
      <div className={styles["hero-info"]}>
        <ul className={styles["hero-stat"]}>
          <li>от 12 500 ₽</li>
          <li>от 2,5 лет</li>
          <li>100% онлайн</li>
        </ul>
        <div className={styles["hero-avatar"]}>
          <Image src="/assets/hero-avatar.svg" alt="univer-avatar" />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
