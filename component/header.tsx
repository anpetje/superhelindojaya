import { siteConfig } from '@/config/site';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='w-full h-[44px] sm:h-[100px] bg-white flex items-center justify-center  px-4 py-2.5'>
      <Image
        src={siteConfig.logo_with_text}
        alt='SuperHelindo Jaya'
        width={756}
        height={92}
        className='h-[24px] sm:h-[46px] w-auto max-w-full'
        priority
      />
    </header>
  );
};

export default Header;
