import Head from 'next/head'

import styles from '@/src/styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Posts | SpaceTraveling</title>
      </Head>

      <div className={styles.container}>
        <img className={styles.c__logo} src="/images/logo.svg" alt="SpaceTraveling" />

        <ul className={styles.c__posts}>
          <li className={styles.p__post}>
            <a href="#!">
              <strong className={styles.p__title}>Como utilizar Hooks</strong>
              <p className={styles.p__description}>Pensando em sincronização em vez de ciclos de vida.</p>
              <div>
                <time className={styles.p__date}>15 Mar 2021</time>
                <span className={styles.p__author}>Gabriel Oliveira</span>
              </div>
            </a>
          </li>

          <li className={styles.p__post}>
            <a href="#!">
              <strong className={styles.p__title}>Como utilizar Hooks</strong>
              <p className={styles.p__description}>Pensando em sincronização em vez de ciclos de vida.</p>
              <div>
                <time className={styles.p__date}>15 Mar 2021</time>
                <span className={styles.p__author}>Gabriel Oliveira</span>
              </div>
            </a>
          </li>

          <li className={styles.p__post}>
            <a href="#!">
              <strong className={styles.p__title}>Como utilizar Hooks</strong>
              <p className={styles.p__description}>Pensando em sincronização em vez de ciclos de vida.</p>
              <div>
                <time className={styles.p__date}>15 Mar 2021</time>
                <span className={styles.p__author}>Gabriel Oliveira</span>
              </div>
            </a>
          </li>

          <li className={styles.p__post}>
            <a href="#!">
              <strong className={styles.p__title}>Como utilizar Hooks</strong>
              <p className={styles.p__description}>Pensando em sincronização em vez de ciclos de vida.</p>
              <div>
                <time className={styles.p__date}>15 Mar 2021</time>
                <span className={styles.p__author}>Gabriel Oliveira</span>
              </div>
            </a>
          </li>
        </ul>

        <button type="button" className={styles.c__load_more}>Carregar mais posts</button>
      </div>
    </>
  )
}
