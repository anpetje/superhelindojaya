import { StaticImageData } from 'next/image';
import LayoutSection from './layout-section';
import Image from 'next/image';

import SSeriesEscalator from '@/assets/images/products/escalator/s-series-escalator.png';
import SmSeriesMovingWalks from '@/assets/images/products/escalator/sm-series-moving-walks.png';

const Escalator = () => {
  const products = [
    {
      title: 'S Series Escalator',
      description:
        'S Series Escalators feature a smooth and compact design based on a conventional system that uses a single drive station installed at the top of the truss to maximize space efficiency. It is ideal for hotels, shopping centers, banks, and office buildings.',
      image: SSeriesEscalator,
    },
    {
      title: 'SM Series Moving Walks',
      description:
        'SM Series Moving Walks can be installed horizontally, in gradients of up to 12 degrees, or any combination thereof. They are widely used in a variety of buildings and facilities, including supermarkets, subway, and railroad stations, sport stadiums, and department stores to offer customers and users a new dimension of convenience and satisfaction.',
      image: SmSeriesMovingWalks,
    },
  ];

  const CardProduct = ({
    title,
    description,
    image,
  }: {
    title: string;
    description: string;
    image: StaticImageData;
  }) => {
    return (
      <div className='rounded-xl overflow-hidden bg-white sm:max-w-[954px] '>
        <Image src={image} alt={title} className='w-full h-auto object-cover rounded-xl' />
        <div className='px-2.5 py-5 flex flex-col gap-2.5 text-left leading-[140%] '>
          <div className='text-[#008837] font-bold text-[23px] sm:text-[25px] '>{title}</div>
          <div className='text-[#666666] text-base sm:text-lg '>{description}</div>
        </div>
      </div>
    );
  };

  return (
    <LayoutSection
      id='escalator'
      classNameSection='bg-[#F9F9F9]'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[40px] sm:gap-[50px] container mx-auto'
    >
      <div className='flex flex-col gap-2.5'>
        <div
          className={`text-2xl sm:text-[42px] text-[#C48A04] font-bold leading-[130%] uppercase `}
        >
          ESCALATOR / MOVING WALK
        </div>
        <p className='text-base sm:text-xl text-black'>
          The escalators and moving walks of Hyundai Elevator connect severed areas, transforming
          them into an open and mutual space in a building. They will offer a new dimension of
          safety, efficiency and ride quality.
        </p>
      </div>
      <div className='grid grid-cols-1 content-center gap-x-[30px] gap-y-[40px] sm:gap-y-[50px]'>
        {products.map((item, index) => (
          <CardProduct
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </LayoutSection>
  );
};

export default Escalator;
