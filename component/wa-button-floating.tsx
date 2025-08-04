'use client';
import Link from 'next/link';
import Image from 'next/image';
import Whatsapp from '@/assets/images/socials/wa.png';
import { siteConfig } from '@/config/site';

const WaButtonFloating = () => {
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
      id='whatsappLinkFloat'
      href={siteConfig.contact.whatsapp}
      target='_blank'
      className='whatsappLink fixed bottom-5 md:bottom-[76px] right-3 md:right-16 rounded-full bg-white shadow-md p-0.5 md:p-1 z-50'
      onClick={handleClickWA}
    >
      <Image src={Whatsapp} alt='Whatsapp' width={50} height={50} className='w-auto h-11' />
    </Link>
  );
};

export default WaButtonFloating;
