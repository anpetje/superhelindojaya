import { Colors } from '@/config/colors';
import LayoutSection from './layout-section';

const Elevator = () => {
  return (
    <LayoutSection classNameContainer='flex flex-col items-center justify-center text-center gap-[50px]'>
      <div className='flex flex-col gap-2.5'>
        <div className={`text-[42px] text-[${Colors.primary}] font-bold leading-[130%] uppercase `}>
          Elevator
        </div>
        <p className='text-xl text-white'>
          Hyundai Elevator develops products appropriate for building designs and elevator uses so
          as to provide customized solutions. Not only safety and ride quality but space efficiency
          is taken into account to provide you with optimal products that will raise the value of
          buildings with exquisite designs and convenient functions.
        </p>
      </div>
    </LayoutSection>
  );
};

export default Elevator;
