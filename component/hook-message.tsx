import Link from 'next/link';
import LayoutSection from './layout-section';

const HookMessage = () => {
  return (
    <LayoutSection
      id='hook-message'
      classNameSection='bg-[#232323]'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[40px] sm:gap-[50px] container mx-auto'
    >
      <div className='flex flex-col gap-2.5'>
        <div
          className={`text-2xl sm:text-[42px] text-[#C48A04] font-bold leading-[130%] uppercase `}
        >
          Elevate Your Building with World-Class Elevator Technology
        </div>
        <p className='text-base sm:text-xl text-white'>
          We provide premium elevator & escalator solutions for homes, offices, hospitals, malls,
          and more — Exclusive installation by PT Superhelindo Jaya, an authorized sole agent of
          Hyundai Elevator & Escalator in Indonesia.
        </p>
      </div>
      <Link
        href='#inquiry'
        className={`px-6 py-3 text-white font-bold uppercase rounded-full border border-[#FCF2D9] bg-gradient-to-r from-[#008837] to-[#FFB300] hover:from-green-700 hover:to-yellow-500 transition text-sm sm:text-base`}
      >
        GET A FREE CONSULTATION, EXCLUSIVE OFFER AWAITS
      </Link>
    </LayoutSection>
  );
};
export default HookMessage;
