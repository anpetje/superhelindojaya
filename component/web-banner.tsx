import { ImagesVariables } from '@/config/images';
import LayoutSection from './layout-section';
import Image from 'next/image';

const WebBanner = () => {
  const itemList = (content: string) => (
    <li className='flex items-center gap-5'>
      <svg
        className={`w-[17px] h-[21px] text-[#008837] flex-shrink-0`}
        viewBox='0 0 17 21'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 0L17 10.5L0 21V0Z' />
      </svg>
      {content}
    </li>
  );

  return (
    <LayoutSection
      classNameSection='relative'
      classNameContainer='flex flex-col items-center justify-center text-center '
      childrenUpperContainer={
        <Image
          src={ImagesVariables.webBanner.src}
          alt={ImagesVariables.webBanner.alt}
          width={1920}
          height={1080}
          className='absolute top-0 left-0 w-full h-full object-cover -z-10'
        />
      }
    >
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
      <h1 className={`text-[42px] text-[#008837] font-bold leading-[130%] uppercase `}>
        Total Solutions for Movement
      </h1>
      <h2 className={`text-2xl text-[#C48A04] font-semibold leading-[130%] uppercase `}>
        Authorized Sole Agent of Hyundai Elevator in Indonesia
      </h2>
      <ul className='text-left text-black list-none pl-0 mt-6 text-2xl leading-[160%] uppercase relative space-y-2.5 '>
        {itemList('World-Class Elevator Technology')}
        {itemList('Energy-Efficient & Eco-Friendly')}
        {itemList('Low Maintenance, Built to Last')}
        {itemList('Certified Quality & International Safety Standards')}
      </ul>
    </LayoutSection>
  );
};

export default WebBanner;
