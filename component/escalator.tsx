import LayoutSection from './layout-section';

const Escalator = () => {
  return (
    <LayoutSection classNameContainer='flex flex-col items-center justify-center text-center gap-[50px]'>
      <div className='flex flex-col gap-2.5'>
        <div className={`text-[42px] text-[#C48A04] font-bold leading-[130%] uppercase `}>
          ESCALATOR / MOVING WALK
        </div>
        <p className='text-xl text-white'>
          The escalators and moving walks of Hyundai Elevator connect severed areas, transforming
          them into an open and mutual space in a building. They will offer a new dimension of
          safety, efficiency and ride quality.
        </p>
      </div>
    </LayoutSection>
  );
};

export default Escalator;
