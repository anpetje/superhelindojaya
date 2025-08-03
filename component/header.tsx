import { siteConfig } from '@/config/site';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='w-full h-[100px] bg-white flex items-center justify-center'>
      <Image
        src={siteConfig.logo_with_text}
        alt='SuperHelindo Jaya'
        width={756}
        height={92}
        className='h-[46px] w-auto'
        priority
      />
    </header>
  );
};

export default Header;
