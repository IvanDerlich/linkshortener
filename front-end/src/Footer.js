import styles from "./Footer.module.css"; // Import the CSS module

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.creditsText}>
        Developed by{" "}
        <a
          href="https://ivanderlich.com"
          target="_blank"
          className={styles.creditLink}
          rel="noreferrer"
        >
          Ivan Derlich
        </a>{" "}
        |
        <a
          href="https://github.com/ivanDerlich"
          target="_blank"
          className={styles.creditLink}
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
      <div className={styles.repoLinks}>
        <p>
          <a
            href="https://localhost:3000/api"
            target="_blank"
            className={styles.repoLink}
            rel="noreferrer"
          >
            Backend Docs
          </a>{" "}
          |
          <a
            href="https://github.com/IvanDerlich/linkshortener"
            target="_blank"
            className={styles.repoLink}
            rel="noreferrer"
          >
            Backend Repo
          </a>{" "}
          |
          <a
            href="https://github.com/IvanDerlich/url-shortener-frontend"
            target="_blank"
            className={styles.repoLink}
            rel="noreferrer"
          >
            Frontend Repo
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
