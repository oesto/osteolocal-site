export function generateSoftwareJsonLd(lang: 'fr' | 'en') {
  const isFr = lang === 'fr';
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'OsteoLocal',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, macOS, Linux',
    description: isFr
      ? 'Logiciel de gestion de cabinet d\'ostéopathie — patients, agenda, facturation, statistiques. 100% hors-ligne, licence à vie.'
      : 'Osteopathy practice management software — patients, calendar, invoicing, analytics. 100% offline, lifetime license.',
    offers: [
      {
        '@type': 'Offer',
        price: '550',
        priceCurrency: 'EUR',
        name: isFr ? 'Licence à vie' : 'Lifetime License',
      },
      {
        '@type': 'Offer',
        price: '8',
        priceCurrency: 'EUR',
        name: isFr ? 'Location-Accession Essentiel' : 'Lease-to-Own Essential',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '8',
          priceCurrency: 'EUR',
          unitText: 'MON',
        },
      },
    ],
  });
}

export function generateFaqJsonLd(items: { q: string; a: string }[]) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  });
}
