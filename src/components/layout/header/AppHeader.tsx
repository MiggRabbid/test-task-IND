import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <header className={styles.app_header}>
      <a href="/" className={styles.app_header__logo}>
        <img
          src="/media/logo/logo-big.png"
          alt="STEMPS"
          loading="lazy"
          className={styles.app_header__logo_img}
        />
        <span className={styles.app_header__logo_text}>STEMPS</span>
      </a>
      <nav className={styles.app_header__nav}>
        <ul className={styles.app_header__nav_links}>
          <li>
            <a className={styles.app_header__nav_link} href="#">
              О школе
            </a>
          </li>
          <li>
            <a className={styles.app_header__nav_link} href="#">
              Курсы
            </a>
          </li>
          <li>
            <a className={styles.app_header__nav_link} href="#">
              Библиотека
            </a>
          </li>
        </ul>
        <div className={styles.app_header__nav_logout}>
          <button className={styles.app_header__logout_btn}>
            <span className={styles.app_header__logout_btn__text}>Вход</span>
            <img
              src="/media/icons/exclude.png"
              alt="Вход"
              className={styles.app_header__logout_btn__img}
            />
          </button>
        </div>
      </nav>
      <nav className={styles.app_header__nav_mobile}>
        <button className={styles.app_header__nav_mobile__menu_btn}>МЕНЮ</button>
      </nav>
    </header>
  );
};

export default AppHeader;
