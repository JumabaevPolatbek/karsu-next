import Information from "../../Components/Information";
import styles from "./InformationSection.module.scss";

const bigPost = {
  type: "big",
  title: "Новости",
  heading:
    "Геологи раскрывают окружающую залежи редкоземельных элементов тайну",
  text: "Группа научных исследователей смогла залежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементов окружающую залежи редкоземельных элементовокружающую залежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементов",
  imgSrc: "./images/posts/big.png",
  date: "12 ноября 2020",
};

const smallPost = {
  type: "small",
  title: "абитуриенту",
  heading: "Создан антибиотик на основе яда азиатской осы",
  text: "Ключевым элементом яда  залежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементовзалежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементов",
  imgSrc: "./images/posts/small.png",
  date: "12 ноября 2020",
};

function InformationSection() {
  return (
    <div className="container">
      <div className={styles["information-section"]}>
        <h2 className={styles["title"]}>Полезная информация</h2>
        <div className={styles["information__block"]}>
          <ul className={styles["information__types"]}>
            <li className={styles["active"]}>
              Все <span>36</span>
            </li>
            <li>
              Абитуриенту <span>14</span>
            </li>
            <li>
              Переводнику <span>5</span>
            </li>
            <li>
              Новости <span>10</span>
            </li>
          </ul>
        </div>
        <div className={styles["posts"]}>
          <div className={styles["post-block"]}>
            <Information data={bigPost} />
            <div className={styles["small-block"]}>
              <Information data={smallPost} />
              <Information data={smallPost} />
            </div>
            <div className={styles["small-block"]}>
              <Information data={smallPost} />
              <Information data={smallPost} />
            </div>
          </div>
          <div className={styles["post-block"]}>
            <Information data={bigPost} />
            <Information data={bigPost} />
            <div className={styles["small-block"]}>
              <Information data={smallPost} />
              <Information data={smallPost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
