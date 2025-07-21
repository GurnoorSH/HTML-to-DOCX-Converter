import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FileUpload from '../components/FileUpload';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HTML to DOCX Converter</title>
        <meta name="description" content="Convert HTML files to DOCX format" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">HTML to DOCX Converter!</a>
        </h1>

        <p className={styles.description}>
          Get started by uploading your HTML file
        </p>

        <FileUpload />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
