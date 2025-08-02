import { Colors } from '@/config/colors';
import LayoutSection from './layout-section';

const AboutUs = () => {
  return (
    <LayoutSection classNameContainer='flex flex-col items-center justify-center text-center gap-[50px]'>
      <div className='flex flex-col gap-2.5'>
        <div className={`text-[42px] text-[${Colors.primary}] font-bold leading-[130%] uppercase `}>
          About Us
        </div>
        <p className='text-xl text-white'>
          Established in 1993, PT Superhelindo Jaya is the sole authorized agent for Hyundai
          Elevator & Escalator in Indonesia. We are recognized as one of the largest and most
          trusted companies in the elevator and escalator industry. Driven by professionalism and a
          dedicated team focused on customer satisfaction, our Hyundai Elevator & Escalator products
          have been widely installed and trusted throughout Indonesia.
        </p>
      </div>

      <div className='flex flex-col gap-2.5'>
        <div
          className={`text-[42px] text-[${Colors.secondary}] font-bold leading-[130%] uppercase `}
        >
          Since 1993
        </div>
        <p className='text-xl text-white'>
          PT Superhelindo Jaya has successfully installed over 10,000++ units of elevators and
          escalators across Indonesia (as of 2024).
        </p>
      </div>
    </LayoutSection>
  );
};
export default AboutUs;
