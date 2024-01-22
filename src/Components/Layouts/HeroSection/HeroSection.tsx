import styles from "../../../styles/banner/HeroSection.module.scss";
import HeroBanner from "../../HeroBanner";
import HeroForm from "../../HeroForm";

function HeroSection() {
  return (
    <div className="container">
      <div className={styles["hero-section"]}>
        <HeroBanner />
        <HeroForm />
      </div>
    </div>
  );
}

export default HeroSection;
