import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src='/logo.png'
          alt='SuperHelindo Jaya'
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className={styles.footer}>
        {/* copyright superhelindojaya */}
        <p>© {new Date().getFullYear()} SuperHelindo Jaya. All rights reserved.</p>
      </footer>
    </div>
  );
}
