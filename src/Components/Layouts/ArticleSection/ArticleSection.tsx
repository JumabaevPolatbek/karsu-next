import Article from "../../Components/Article";
import HeroForm from "../../Components/HeroForm";
import styles from  "./ArticleSection.module.scss";

function ArticleSection() {
  return (
    <div className="container">
      <div className={styles["article-section"]}>
        <section>
          <Article />
          <aside>
            <HeroForm />
            <div className={styles["interesting__section"]}>
              <h4>Может быть интересно:</h4>
              <ul className={styles["interesting__news"]}>
                <li>
                  <p className={styles["type"]}>Абитуриенту</p>
                  <p className={styles["text"]}>
                    Ученые: Реальность может оказаться симуляцией с вероятностью
                    50%
                  </p>
                </li>
                <li>
                  <p className={styles["type"]}>Абитуриенту</p>
                  <p className={styles["text"]}>
                    Ученые: Реальность может оказаться симуляцией с вероятностью
                    50%
                  </p>
                </li>
                <li>
                  <p className={styles["type"]}>Абитуриенту</p>
                  <p className={styles["text"]}>
                    Ученые: Реальность может оказаться симуляцией с вероятностью
                    50%
                  </p>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default ArticleSection;
