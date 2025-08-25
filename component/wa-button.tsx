'use client';
import Link from 'next/link';
import Image from 'next/image';
import Whatsapp from '@/assets/images/socials/wa.png';
import { siteConfig } from '@/config/site';
import { eventNames } from 'process';

type WindowWithFbq = Window & {
  fbq?: (event: string, eventName: string, options?: object, params?: object) => void;
};

function generateEventId(prefix = 'event') {
  const randomStr = Array.from({ length: 8 }, () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26))
  ).join('');
  return `${prefix}_${Date.now()}_${randomStr}`;
}

const WaButton = () => {
  const handleClickWA = async () => {
    const eventName = 'Klik WhatsApp';
    let eventId = eventName;
    // if (
    //   (process.env.NEXT_PUBLIC_ENABLE_DYNAMIC_TRACKING_EVENT_ID || '').toLocaleLowerCase() ===
    //   'true'
    // ) {
    eventId = generateEventId(eventName?.toLowerCase().replaceAll(/\s+/g, '_'));
    // }

    if (typeof window !== 'undefined' && (window as WindowWithFbq).fbq) {
      (window as WindowWithFbq).fbq?.(
        'track',
        'Lead',
        {
          source: eventNames,
        },
        {
          eventID: eventId,
        }
      );
    }

    await fetch('/api/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventID: eventId,
        eventName: 'Lead',
        customData: {
          event_name: eventName,
          button_name: 'WhatsApp',
        },
      }),
    });
  };

  return (
    <Link
      id='whatsappLinkFooter'
      href={siteConfig.contact.whatsapp}
      target='_blank'
      className='whatsappLink'
      onClick={handleClickWA}
    >
      <Image
        id='whatsappLinkIconFooter'
        src={Whatsapp}
        alt='Whatsapp'
        width={36}
        height={36}
        className='w-auto h-[36px]'
      />
    </Link>
  );
};

export default WaButton;
