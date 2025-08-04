import { ImagesVariables } from '@/config/images';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

const Header = () => {
  return (
    // <header className='w-full h-[44px] sm:h-[100px] bg-white flex items-center justify-between sm:justify-center px-4 py-2.5'>
    //   <Image
    //     src={siteConfig.logo_with_text}
    //     alt='SuperHelindo Jaya'
    //     width={756}
    //     height={92}
    //     className='h-[24px] sm:h-[46px] w-auto max-w-full'
    //     priority
    //   />
    //   <Image
    //     src={ImagesVariables.hyundaiElevator.src}
    //     alt={ImagesVariables.hyundaiElevator.alt}
    //     width={200}
    //     height={100}
    //     className='w-auto max-w-full h-5 sm:h-[46px] sm:hidden'
    //   />
    // </header>
    <header className='w-full max-w-full h-[44px] sm:h-[100px] bg-white flex items-center justify-between sm:justify-center gap-2.5 px-4 py-2.5 overflow-hidden'>
      <div className='max-w-full flex-shrink overflow-hidden'>
        <Image
          src={siteConfig.logo_with_text}
          alt='SuperHelindo Jaya'
          width={756}
          height={92}
          className='h-[24px] sm:h-[46px] w-auto max-w-full'
          priority
        />
      </div>
      <div className='max-w-full flex-shrink-0 sm:hidden'>
        <Image
          src={ImagesVariables.hyundaiElevator.src}
          alt={ImagesVariables.hyundaiElevator.alt}
          width={200}
          height={100}
          className='h-5 sm:h-[46px] w-auto max-w-full'
        />
      </div>
    </header>
  );
};

export default Header;
