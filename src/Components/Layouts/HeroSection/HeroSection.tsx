import styles from "./HeroSection.module.scss";
import HeroBanner from "../../Components/HeroBanner";
import HeroForm from "../../Components/HeroForm";

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
