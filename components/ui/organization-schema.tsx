export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TekDivas',
    url: 'https://tek-divas-funnel.vercel.app',
    logo: 'https://tek-divas-funnel.vercel.app/iconn.png',
    description:
      'TekDivas helps growing businesses build a complete web presence — custom websites and ongoing support that turn visitors into customers.',
    sameAs: [
      // add these once you have them live, e.g.:
      // 'https://www.facebook.com/tekdivas',
      // 'https://www.linkedin.com/company/tekdivas',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}