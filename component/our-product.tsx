import LayoutSection from './layout-section';
import Elevator from '@/assets/images/products/elevator.png';
import Escalator from '@/assets/images/products/escalator.png';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

const OurProduct = () => {
  const products = [
    {
      title: 'Elevator',
      description:
        'Hyundai Elevator develops high-quality vertical transportation solutions tailored to meet diverse architectural and operational requirements. Our elevators prioritize safety, comfort, efficiency, and cutting-edge design.',
      image: Elevator,
      url: '#elevator',
    },
    {
      title: 'Escalator',
      description:
        'The escalators and travelators of Hyundai Elevator connect severed areas, transforming them into an open and mutual space in a building. They will offer a new dimension of safety, efficiency and ride quality.',
      image: Escalator,
      url: '#escalator',
    },
  ];

  const CardProduct = ({
    title,
    description,
    image,
    url,
  }: {
    title: string;
    description: string;
    image: StaticImageData;
    url?: string;
  }) => {
    return (
      <Link href={url || '#'}>
        <div className='rounded-xl overflow-hidden bg-white max-w-[452px] '>
          <Image src={image} alt={title} className='w-full h-auto object-cover rounded-xl' />
          <div className='p-6 sm:p-9 text-left text-[#666666] text-base sm:text-lg leading-[140%] '>
            {description}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <LayoutSection
      id='our-product'
      classNameSection='bg-[#F9F9F9]'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[40px] sm:gap-[50px] container mx-auto'
    >
      <div className='flex flex-col gap-2.5'>
        <div
          className={`text-2xl sm:text-[42px] text-[#C48A04] font-bold leading-[130%] uppercase `}
        >
          Our Products
        </div>
        <p className='text-base sm:text-xl text-black'>
          At PT Superhelindo Jaya, we go beyond simply supplying elevators and escalators — we
          deliver complete, worry-free solutions. From helping clients choose the right product to
          offering reliable consultation, we ensure every decision is well-informed. With readily
          available spare parts at competitive prices and end-to-end services covering installation,
          maintenance, and repairs, we provide more than just products — we provide lasting
          performance and peace of mind.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[50px]'>
        {products.map((item, index) => (
          <CardProduct
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
        ))}
      </div>
    </LayoutSection>
  );
};

export default OurProduct;
