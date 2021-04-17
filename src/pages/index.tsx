import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import styles from '@/src/styles/pages/home.module.scss'
import { prismic } from '../services/prismic'

type Post = {
  slug: string
  title: string
  subtitle: string
  author: string
  publishedAt: string
}

type HomeProps = {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Posts | SpaceTraveling</title>
      </Head>

      <div className={styles.container}>
        <img className={styles.c__logo} src="/images/logo.svg" alt="SpaceTraveling" />

        <ul className={styles.c__posts}>
          {posts.map(post => (
            <li key={post.slug} className={styles.p__post}>
              <a href="#!">
                <strong className={styles.p__title}>{post.title}</strong>
                <p className={styles.p__description}>{post.subtitle}</p>
                <div>
                  <time className={styles.p__date}>{post.publishedAt}</time>
                  <span className={styles.p__author}>{post.author}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <button type="button" className={styles.c__load_more}>Carregar mais posts</button>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismic.query(
    Prismic.predicates.at('document.type', 'posts'),
    {
      fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
      pageSize: 1
    }
  )

  const posts = response.results.map(post => ({
    slug: post.uid,
    title: post.data.title,
    subtitle: post.data.subtitle,
    author: post.data.author,
    publishedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }))

  return {
    props: {
      posts,
    },
    revalidate: 60 * 5 // 5 minutes
  }
}
