import styles from "./SubmitDocuments.module.scss";

function SubmitDocuments() {
  return (
    <div className={styles["submit-documents"]}>
      <div className="container">
        <div className={styles["documents__info"]}>
          <h2 className={styles["title"]}>Подать документы</h2>
          <p className={styles["description"]}>
            После того, как вы отправите документы мы свяжемся с Вами для
            уточнения деталей
          </p>
          <h3 className={styles["alert"]}>
            Чтобы начать — выберите учебное заведение
          </h3>
          <div className={styles["input-group"]}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Поиск"
            />
            <p className={styles["result"]}>Найдено 6 вузов</p>
          </div>
        </div>

        <div className={styles["departures"]}>
          <div
            className={styles["departure"]}
            style={{ backgroundImage: "url(./images/fon_departure/1.png)" }}
          >
            <div className={styles["departure__info"]}>
              <p className={styles["departure__type"]}>Преимущество</p>
              <h2 className={styles["departure__title"]}>
                Международный Московский университет
              </h2>
              <p className={styles["departure__extra"]}>От 12 500 ₽ семестр</p>
              <a href="#" className={styles["departure__link"]}>
                3 направления
              </a>
            </div>
            <img
              src="./images/hero-avatar.svg"
              alt="univ"
              className={styles["departure__univ"]}
            />
          </div>
          <div
            className={styles["departure"]}
            style={{ backgroundImage: "url(./images/fon_departure/1.png)" }}
          >
            <div className={styles["departure__info"]}>
              <p className={styles["departure__type"]}>Преимущество</p>
              <h2 className={styles["departure__title"]}>
                Международный Московский университет
              </h2>
              <p className={styles["departure__extra"]}>От 12 500 ₽ семестр</p>
              <a href="#" className={styles["departure__link"]}>
                3 направления
              </a>
            </div>
            <img
              src="./images/hero-avatar.svg"
              alt="univ"
              className={styles["departure__univ"]}
            />
          </div>
          <div
            className={styles["departure"]}
            style={{ backgroundImage: "url(./images/fon_departure/1.png)" }}
          >
            <div className={styles["departure__info"]}>
              <p className={styles["departure__type"]}>Преимущество</p>
              <h2 className={styles["departure__title"]}>
                Международный Московский университет
              </h2>
              <p className={styles["departure__extra"]}>От 12 500 ₽ семестр</p>
              <a href="#" className={styles["departure__link"]}>
                3 направления
              </a>
            </div>
            <img
              src="./images/hero-avatar.svg"
              alt="univ"
              className={styles["departure__univ"]}
            />
          </div>
          <div
            className={styles["departure"]}
            style={{ backgroundImage: "url(./images/fon_departure/1.png)" }}
          >
            <div className={styles["departure__info"]}>
              <p className={styles["departure__type"]}>Преимущество</p>
              <h2 className={styles["departure__title"]}>
                Международный Московский университет
              </h2>
              <p className={styles["departure__extra"]}>От 12 500 ₽ семестр</p>
              <a href="#" className={styles["departure__link"]}>
                3 направления
              </a>
            </div>
            <img
              src="./images/hero-avatar.svg"
              alt="univ"
              className={styles["departure__univ"]}
            />
          </div>
          <div
            className={styles["departure"]}
            style={{ backgroundImage: "url(./images/fon_departure/1.png)" }}
          >
            <div className={styles["departure__info"]}>
              <p className={styles["departure__type"]}>Преимущество</p>
              <h2 className={styles["departure__title"]}>
                Международный Московский университет
              </h2>
              <p className={styles["departure__extra"]}>От 12 500 ₽ семестр</p>
              <a href="#" className={styles["departure__link"]}>
                3 направления
              </a>
            </div>
            <img
              src="./images/hero-avatar.svg"
              alt="univ"
              className={styles["departure__univ"]}
            />
          </div>
          <div
            className={styles["departure"]}
            style={{ backgroundImage: "url(./images/fon_departure/1.png)" }}
          >
            <div className={styles["departure__info"]}>
              <p className={styles["departure__type"]}>Преимущество</p>
              <h2 className={styles["departure__title"]}>
                Международный Московский университет
              </h2>
              <p className={styles["departure__extra"]}>От 12 500 ₽ семестр</p>
              <a href="#" className={styles["departure__link"]}>
                3 направления
              </a>
            </div>
            <img
              src="./images/hero-avatar.svg"
              alt="univ"
              className={styles["departure__univ"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitDocuments;
