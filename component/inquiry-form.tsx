import LayoutSection from './layout-section';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
};

const Input = ({ label, required = false, ...props }: InputProps) => (
  <input
    placeholder={`${label}${required ? ' *' : ''}`}
    className='w-full px-4 py-2 bg-[#2a2a2a] text-white placeholder:text-gray-300 placeholder:tracking-wide placeholder:font-medium rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500'
    {...props}
  />
);

const InquiryForm = () => {
  return (
    <LayoutSection
      id='inquiry'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[50px]'
    >
      <div className='flex flex-col gap-2.5'>
        <div className={`text-[42px] text-[#008837] font-bold leading-[130%] uppercase `}>
          Want to know more?
        </div>
        <p className='text-xl text-white'>
          For inquiries about new product installation, modernization, quotation or any other
          related questions regarding services, please e-mail us. Our dedicated team will get back
          to you within 24 hours.
        </p>
      </div>
      <form id='inquiry-form'>
        {/* <div className='flex justify-between'>
          <input type='text' name='name' id='name' className='w-[305px] ' />
          <input type='email' name='email' id='email' className='w-[305px] ' />
          <input type='tel' name='phone' id='phone' className='w-[305px] ' />
          <input type='text' name='company' id='company' className='w-[305px] ' />
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-[50px]'>
          <Input label='Full Name' required />
          <Input label='Email' required />
          <Input label='Phone/Whatsapp' required />
          <Input label='Company Name' required />
        </div>

        <button
          className={`px-6 py-3 text-white font-bold uppercase rounded-full border border-[#FCF2D9] bg-gradient-to-r from-[#008837] to-[#FFB300] hover:from-green-700 hover:to-yellow-500 transition`}
        >
          Get an Exclusive Offer Today!
        </button>
      </form>
    </LayoutSection>
  );
};

export default InquiryForm;
