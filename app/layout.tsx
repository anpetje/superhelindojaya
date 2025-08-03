import type { Metadata } from 'next';
import './globals.css';
import { FontsVariables } from '@/config/fonts';

import { headers } from 'next/headers';
import Head from 'next/head';
import Script from 'next/script';

const gtmId = process.env.GTM_ID;
const fbPixelId = process.env.FB_PIXEL_ID;

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
      <Head>
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

        {fbPixelId && (
          <noscript>
            <img
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
              alt=''
            />
          </noscript>
        )}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}
      </Head>

      {fbPixelId && (
        <Script
          id='fb-pixel'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${fbPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
      {gtmId && (
        <Script
          id='gtm-head'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `,
          }}
        />
      )}

      <body className={`${FontsVariables.titilliumWeb.variable}`}>{children}</body>
    </html>
  );
}
