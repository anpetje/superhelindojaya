import { ImagesVariables } from '@/config/images';
import Image from 'next/image';

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
              <div className={`text-xl text-[#008837] font-bold uppercase`}>
                PT Superhelindo Jaya
              </div>
              <div className='text-xl text-white'>
                We provide premium elevator & escalator solutions for homes, offices, hospitals,
                malls, and more — Exclusive installation by PT Superhelindo Jaya, an authorized sole
                agent of Hyundai Elevator & Escalator in Indonesia.
              </div>
            </div>
            <div className='flex flex-col gap-2.5 text-xl text-white'>
              <div>Jl. K.H. Moh Mansyur No. 19B (Jembatan Lima) Jakarta 10140</div>
              <div>+62 21 631 8444 (Hunting), +62 21 633 8445</div>
              <div>+62 21 6326288</div>
              <div>marketing@superhelindo.id</div>
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
