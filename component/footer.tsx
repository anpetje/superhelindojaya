import { ImagesVariables } from '@/config/images';
import Image from 'next/image';

import Intagram from '@/assets/images/socials/ig.png';
import Whatsapp from '@/assets/images/socials/wa.png';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

import Location from '@/assets/images/contact/location.png';
import Phone from '@/assets/images/contact/phone.png';
import Email from '@/assets/images/contact/email.png';
import Fax from '@/assets/images/contact/fax.png';

const Footer = () => {
  return (
    <footer>
      <div className='bg-[#151515] py-[60px] px-6 md:py-[100px] md:px-10 relative'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-center gap-10 mb-10 bg-white rounded-[100px] py-9 px-[120px] '>
            <Image
              src={ImagesVariables.logoWithText.src}
              alt={ImagesVariables.logoWithText.alt}
              width={300}
              height={100}
              className='w-auto h-[46px]'
            />

            <Image
              src={ImagesVariables.hyundaiElevator.src}
              alt={ImagesVariables.hyundaiElevator.alt}
              width={200}
              height={100}
              className='w-auto h-[46px]'
            />
          </div>
          <div className='grid grid-cols-2 gap-[130px] mt-[50px]'>
            <div className='flex flex-col gap-[30px]'>
              <div className={`text-xl text-[#FFB300] font-bold uppercase`}>
                PT Superhelindo Jaya
              </div>
              <div className='text-xl text-white'>
                We provide premium elevator & escalator solutions for homes, offices, hospitals,
                malls, and more — Exclusive installation by PT Superhelindo Jaya, an authorized sole
                agent of Hyundai Elevator & Escalator in Indonesia.
              </div>
              <div className='flex gap-2.5'>
                <Link href={siteConfig.links.instagram} target='_blank'>
                  <Image
                    src={Intagram}
                    alt='Instagram'
                    width={36}
                    height={36}
                    className='w-auto h-[36px]'
                  />
                </Link>
                <Link href={siteConfig.contact.whatsapp} target='_blank'>
                  <Image
                    src={Whatsapp}
                    alt='Whatsapp'
                    width={36}
                    height={36}
                    className='w-auto h-[36px]'
                  />
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 text-xl text-white'>
              <div>
                <Image
                  src={Location}
                  alt='Location'
                  width={32}
                  height={32}
                  className='inline-block mr-2.5 h-[32px]'
                />
                {siteConfig.contact.address}
              </div>
              <div>
                <Image
                  src={Phone}
                  alt='Phone'
                  width={32}
                  height={32}
                  className='inline-block mr-2.5 h-[32px]'
                />
                {siteConfig.contact.phone} (Hunting), {siteConfig.contact.phone2}
              </div>
              <div>
                <Image
                  src={Fax}
                  alt='Fax'
                  width={32}
                  height={32}
                  className='inline-block mr-2.5 h-[32px]'
                />
                {siteConfig.contact.fax}
              </div>
              <div>
                <Image
                  src={Email}
                  alt='Email'
                  width={32}
                  height={32}
                  className='inline-block mr-2.5 h-[32px]'
                />
                <Link href={`mailto:${siteConfig.contact.email}`} target='_blank'>
                  {siteConfig.contact.email}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-[30px] bg-[#232323] text-white text-center'>
        <p className='container mx-auto '>
          © {new Date().getFullYear()} HYUNDAI ELEVATOR SOLE AGENT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
