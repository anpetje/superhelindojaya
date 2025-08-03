import LayoutSection from './layout-section';

const OurProduct = () => {
  return (
    <LayoutSection classNameContainer='flex flex-col items-center justify-center text-center gap-[50px]'>
      <div className='flex flex-col gap-2.5'>
        <div className={`text-[42px] text-[#C48A04] font-bold leading-[130%] uppercase `}>
          Our Products
        </div>
        <p className='text-xl text-white'>
          At PT Superhelindo Jaya, we go beyond simply supplying elevators and escalators — we
          deliver complete, worry-free solutions. From helping clients choose the right product to
          offering reliable consultation, we ensure every decision is well-informed. With readily
          available spare parts at competitive prices and end-to-end services covering installation,
          maintenance, and repairs, we provide more than just products — we provide lasting
          performance and peace of mind.
        </p>
      </div>
    </LayoutSection>
  );
};

export default OurProduct;
