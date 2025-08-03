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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${FontsVariables.titilliumWeb.variable}`}>{children}</body>
    </html>
  );
}
