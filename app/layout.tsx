import type { Metadata } from 'next';
import './globals.css';
import { FontsVariables } from '@/config/fonts';

import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  // Get domain from request host header
  const h = await headers();
  const host = h.get('host');
  const protocol = host && host.startsWith('localhost') ? 'http' : 'https';
  const domain = host ? `${protocol}://${host}` : 'https://www.superhelindojaya.id';

  return {
    title: 'PT Superhelindo Jaya - Authorized Sole Agent of Hyundai Elevator Indonesia',
    description:
      'PT Superhelindo Jaya is the authorized sole agent of Hyundai Elevator & Escalator in Indonesia, offering world-class elevator and escalator solutions since 1993.',
    keywords: [
      'Hyundai Elevator Indonesia',
      'Superhelindo',
      'Elevator Installation',
      'Escalator Indonesia',
      'Freight Elevator',
      'Home Elevator',
      'Hospital Elevator',
      'Automobile Elevator',
      'Moving Walk',
      'Vertical Transportation',
    ],
    robots: 'index, follow',
    authors: [{ name: 'PT Superhelindo Jaya' }],
    openGraph: {
      type: 'website',
      title: 'PT Superhelindo Jaya - Hyundai Elevator Indonesia',
      description:
        'Premium elevators, escalators, and moving walks from Hyundai, installed and serviced by Superhelindo across 98+ cities in Indonesia.',
      url: 'https://www.superhelindojaya.id',
      siteName: 'Superhelindo Jaya',
      images: [
        {
          url: `${domain}/image.png`,
          width: 1200,
          height: 630,
          alt: 'PT Superhelindo Jaya - Hyundai Elevator Indonesia',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PT Superhelindo Jaya - Hyundai Elevator Indonesia',
      description:
        'Explore Hyundai elevators, escalators, and travelators with PT Superhelindo Jaya. Over 10,000 units installed nationwide.',
      images: [`${domain}/image.png`],
    },
    other: {
      author: 'PT Superhelindo Jaya',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get domain from request host header
  const h = await headers();
  const host = h.get('host');
  const protocol = host && host.startsWith('localhost') ? 'http' : 'https';
  const domain = host ? `${protocol}://${host}` : 'https://www.superhelindojaya.id';

  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PT Superhelindo Jaya",
  "url": "https://www.superhelindojaya.id",
  "logo": "${domain}/image.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62 21 632 6288",
    "contactType": "Customer Service",
    "email": "marketing@superhelindo.id",
    "areaServed": "ID",
    "availableLanguage": ["English", "Indonesian"]
  }
}`,
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PT Superhelindo Jaya",
  "image": "${domain}/image.png",
  "@id": "https://www.superhelindojaya.id",
  "url": "https://www.superhelindojaya.id",
  "telephone": "+62 21 632 6288",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. K.H. Moh Mansyur No. 19B (Jembatan Lima)",
    "addressLocality": "Jakarta",
    "postalCode": "10140",
    "addressCountry": "ID"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:30",
    "closes": "17:30"
  },
  "description": "PT Superhelindo Jaya is the authorized distributor and installer of Hyundai elevators and escalators in Indonesia. Providing world-class vertical transportation solutions since 1993."
}`,
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Hyundai Elevators and Escalators",
  "brand": {
    "@type": "Brand",
    "name": "Hyundai Elevator"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Hyundai Elevator Co., Ltd."
  },
  "description": "Hyundai elevators, escalators, and moving walks installed by PT Superhelindo Jaya across Indonesia. Products include passenger, freight, hospital bed, automobile, and home elevators.",
  "image": "${domain}/elevator.png",
}`,
          }}
        />
      </head>
      <body className={`${FontsVariables.titilliumWeb.variable}`}>{children}</body>
    </html>
  );
}
