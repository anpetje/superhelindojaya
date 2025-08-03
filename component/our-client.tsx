import LayoutSection from './layout-section';

const OurClient = () => {
  return (
    <LayoutSection
      id='our-client'
      classNameSection='bg-white'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[40px] sm:gap-[50px] container mx-auto'
    >
      <div className='flex flex-col gap-2.5'>
        <div
          className={`text-2xl sm:text-[42px] text-[#008837] font-bold leading-[130%] uppercase `}
        >
          Our Clients
        </div>
        <p className='text-base sm:text-xl text-black'>
          Since our establishment in 1993, PT Superhelindo Jaya has been fortunate to receive
          continuous support from our loyal clients who have played a vital role in our growth and
          success. We are truly grateful for their trust, and we look forward to continue supporting
          the growth of your business as well.
        </p>
      </div>
    </LayoutSection>
  );
};

export default OurClient;
