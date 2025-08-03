import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import LayoutSection from './layout-section';
import Image from 'next/image';
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { TabsList } from '@radix-ui/react-tabs';

const OurClient = () => {
  const dataClients = [
    {
      group: 'Apartments Residentials',
      pathImage: '/clients/apartments/apartment',
      total: 14,
    },
    {
      group: 'Office',
      pathImage: '/clients/offices/office',
      total: 5,
    },
    {
      group: 'Hotels',
      pathImage: '/clients/hotels/hotel',
      total: 16,
    },
    {
      group: 'Malls & Retail Centers',
      pathImage: '/clients/malls-retails/mall',
      total: 7,
    },
    {
      group: 'Healthcare & Transport',
      pathImage: '/clients/healthcare-transport/hct',
      total: 11,
    },
    {
      group: 'Manufacturing Facilities & Showroom',
      pathImage: '/clients/manufacturing-showroom/manushow',
      total: 11,
    },
    {
      group: 'Sports & Expo',
      pathImage: '/clients/sports-expo/spoex',
      total: 2,
    },
    {
      group: 'Institutions',
      pathImage: '/clients/institutions/inst',
      total: 11,
    },
  ];
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

      <Accordion
        type='single'
        collapsible
        className='w-full space-y-5 md:hidden'
        defaultValue='item-1'
      >
        {dataClients.map((client, index) => (
          <AccordionItem key={index} value={`item-${index + 2}`} className='border-0'>
            <AccordionTrigger className=' bg-[#DEDEDE] p-4 data-[state=open]:bg-[#008837] data-[state=open]:text-white text-lg font-semibold text-[#3C3C3C]'>
              {client.group}
            </AccordionTrigger>
            <AccordionContent className='grid grid-cols-2 gap-5 border border-[#DEDEDE] py-10 px-[30px] mt-5 rounded-[10px] '>
              {Array.from({ length: client.total }, (_, i) => (
                <Image
                  key={i}
                  src={`${client.pathImage}${i + 1}.png`}
                  alt={`${client.group} ${i + 1}`}
                  width={240}
                  height={102.5}
                  className='w-full h-auto object-cover'
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Tabs defaultValue='tab-1' className='gap-0 hidden md:block'>
        <TabsList className='mx-5 w-[calc(100%_-_50px)] flex gap-[5px]'>
          {dataClients.map((client, index) => (
            <TabsTrigger
              key={index}
              value={`tab-${index + 1}`}
              className='grow shrink basis-0 text-center bg-[#DEDEDE] py-4 px-2.5 rounded-t-[5px] rounded-b-none text-lg font-semibold h-[89px] whitespace-normal data-[state=active]:bg-[#008837] data-[state=active]:text-white cursor-pointer hover:bg-green-600 hover:text-white transition-colors duration-300'
            >
              {client.group}
            </TabsTrigger>
          ))}
        </TabsList>
        {dataClients.map((client, index) => (
          <TabsContent key={index} value={`tab-${index + 1}`}>
            <div className='grid grid-cols-5 gap-5 py-10 px-[30px] border border-[#DEDEDE] rounded-[10px]'>
              {Array.from({ length: client.total }, (_, i) => (
                <Image
                  key={i}
                  src={`${client.pathImage}${i + 1}.png`}
                  alt={`${client.group} ${i + 1}`}
                  width={240}
                  height={102.5}
                  className='w-full h-auto object-cover'
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </LayoutSection>
  );
};

export default OurClient;
