import LayoutSection from './layout-section';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

import PassengerElevator from '@/assets/images/products/elevator/passenger-elevator.png';
import FreightElevator from '@/assets/images/products/elevator/freight-elevator.png';
import CarElevator from '@/assets/images/products/elevator/automobil-elevator.png';
import HomeElevator from '@/assets/images/products/elevator/home-elevator.png';
import HospitalElevator from '@/assets/images/products/elevator/hospital-bed-elevator.png';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const Elevator = () => {
  const products = [
    {
      title: 'Passenger Elevator',
      description:
        'Engineered for commercial buildings, shopping malls, and high-rise hotels, delivering smooth, efficient, and reliable transportation.',
      image: PassengerElevator,
    },
    {
      title: 'Home Elevator',
      description:
        'A space-saving solution designed for residential homes, cafés, and retail spaces, combining convenience with modern aesthetics.',
      image: HomeElevator,
    },
    {
      title: 'Hospital Bed Elevator',
      description:
        'Designed specifically for hospitals and clinics, these elevators ensure smooth, safe, and comfortable transportation of patient beds, medical staff, and equipment.',
      image: HospitalElevator,
    },
    {
      title: 'Freight Elevator',
      description:
        'Built for industrial applications, these elevators have a load capacity ranging from 2.5 to 9 tons, providing reliable transportation for heavy equipment and goods.',
      image: FreightElevator,
    },
    {
      title: 'Car Elevator',
      description:
        'Designed for the secure lifting and storage of vehicles, these elevators are ideal for showrooms, parking facilities, and high-density urban areas.',
      image: CarElevator,
    },
  ];

  const CardProduct = ({
    title,
    description,
    image,
    className = '',
  }: {
    title: string;
    description: string;
    image: StaticImageData;
    className?: string;
  }) => {
    return (
      <div className={`rounded-xl overflow-hidden bg-white sm:max-w-[320px] ${className || ''}`}>
        <Image src={image} alt={title} className='w-full h-auto object-cover rounded-xl' />
        <div className='px-2.5 py-5 flex flex-col gap-2.5 text-left leading-[140%] '>
          <div className='text-[#C48A04] font-bold text-[23px] sm:text-[25px] '>{title}</div>
          <div className='text-[#666666] text-base sm:text-lg '>{description}</div>
        </div>
      </div>
    );
  };

  const gridProducts = () => {
    const columns = 3;
    const fullRows = Math.floor(products.length / columns);

    const fullRowItems = products.slice(0, fullRows * columns);
    const lastRowItems = products.slice(fullRows * columns);
    return (
      <>
        <div className='grid-cols-1 md:grid-cols-3 content-center gap-x-[30px] gap-y-[50px] hidden sm:grid'>
          {fullRowItems.map((item, index) => {
            return (
              <CardProduct
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
        {lastRowItems.length > 0 && (
          <div className='flex-col sm:flex-row justify-center gap-[30px] hidden sm:flex'>
            {lastRowItems.map((item, idx) => (
              <CardProduct
                key={idx}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  const carouselProducts = () => {
    return (
      <Carousel className='w-screen sm:hidden px-4'>
        <CarouselContent className='overflow-visible'>
          {products.map((item, index) => (
            <CarouselItem key={index} className='flex justify-center basis-3/4'>
              <CardProduct
                title={item.title}
                description={item.description}
                image={item.image}
                className='w-full sm:max-w-[320px]'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };

  return (
    <LayoutSection
      id='elevator'
      classNameSection='bg-white'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[40px] sm:gap-[50px] container mx-auto'
    >
      <div className='flex flex-col gap-2.5'>
        <div
          className={`text-2xl sm:text-[42px] text-[#008837] font-bold leading-[130%] uppercase `}
        >
          Elevator
        </div>
        <p className='text-base sm:text-xl text-black'>
          Hyundai Elevator develops products appropriate for building designs and elevator uses so
          as to provide customized solutions. Not only safety and ride quality but space efficiency
          is taken into account to provide you with optimal products that will raise the value of
          buildings with exquisite designs and convenient functions.
        </p>
      </div>
      {gridProducts()}
      {carouselProducts()}
    </LayoutSection>
  );
};

export default Elevator;
