import { MetadataRoute } from 'next'
import { destinations } from '@/lib/destinations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://azerbaijanexplorer.com'

  const destinationPages = destinations.map((dest) => ({
    url: `${baseUrl}/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...destinationPages,
  ]
}
