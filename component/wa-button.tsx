'use client';
import Link from 'next/link';
import Image from 'next/image';
import Whatsapp from '@/assets/images/socials/wa.png';
import { siteConfig } from '@/config/site';

const WaButton = () => {
  const handleClickWA = async () => {
    const eventName = 'Klik WhatsApp';

    await fetch('/api/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventID: eventName,
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
      id='whatsapp-link'
      href={siteConfig.contact.whatsapp}
      target='_blank'
      onClick={handleClickWA}
    >
      <Image src={Whatsapp} alt='Whatsapp' width={36} height={36} className='w-auto h-[36px]' />
    </Link>
  );
};

export default WaButton;
