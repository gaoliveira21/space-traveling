import Prismic from '@prismicio/client'

export const prismic = Prismic.client(
  process.env.PRISMIC_API_ENDPOINT, {
    accessToken: ''
  }
)
