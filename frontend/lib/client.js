import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient ({
  projectId: 'dgdhhe6k',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-08',
  token: process.env.SANITY_API_TOKEN,
});

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
};