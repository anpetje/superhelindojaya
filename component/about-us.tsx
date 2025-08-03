import LayoutSection from './layout-section';
import About1 from '@/assets/images/about/about1.png';
import About2 from '@/assets/images/about/about2.png';
import About3 from '@/assets/images/about/about3.png';
import About4 from '@/assets/images/about/about4.png';

import Since1 from '@/assets/images/since/since1.png';
import Since2 from '@/assets/images/since/since2.png';
import Since3 from '@/assets/images/since/since3.png';

import Image from 'next/image';

const AboutUs = () => {
  return (
    <LayoutSection
      id='about-us'
      classNameSection='bg-white'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[50px]'
    >
      <div className='flex flex-col gap-2.5'>
        <div className={`text-[42px] text-[#008837] font-bold leading-[130%] uppercase `}>
          About Us
        </div>
        <p className='text-xl text-black'>
          Established in 1993, PT Superhelindo Jaya is the sole authorized agent for Hyundai
          Elevator & Escalator in Indonesia. We are recognized as one of the largest and most
          trusted companies in the elevator and escalator industry. Driven by professionalism and a
          dedicated team focused on customer satisfaction, our Hyundai Elevator & Escalator products
          have been widely installed and trusted throughout Indonesia.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4'>
        <Image
          src={About1}
          alt='About Image 1'
          className='w-full max-w-[254px] h-auto object-cover rounded-lg'
        />
        <Image
          src={About2}
          alt='About Image 2'
          className='w-full max-w-[254px] h-auto object-cover rounded-lg'
        />
        <Image
          src={About3}
          alt='About Image 3'
          className='w-full max-w-[254px] h-auto object-cover rounded-lg'
        />
        <Image
          src={About4}
          alt='About Image 4'
          className='w-full max-w-[254px] h-auto object-cover rounded-lg'
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <div className={`text-[42px] text-[#C48A04] font-bold leading-[130%] uppercase `}>
          Since 1993
        </div>
        <p className='text-xl text-black'>
          PT Superhelindo Jaya has successfully installed over 10,000++ units of elevators and
          escalators across Indonesia (as of 2024).
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Image
          src={Since1}
          alt='Since Image 1'
          className='w-full max-w-[320px] h-auto object-cover rounded-lg'
        />
        <Image
          src={Since2}
          alt='Since Image 2'
          className='w-full max-w-[320px] h-auto object-cover rounded-lg'
        />
        <Image
          src={Since3}
          alt='Since Image 3'
          className='w-full max-w-[320px] h-auto object-cover rounded-lg'
        />
      </div>
    </LayoutSection>
  );
};
export default AboutUs;
