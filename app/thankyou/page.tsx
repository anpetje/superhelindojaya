declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

import Link from 'next/link';
import Header from '../../component/header';

// app/thankyou/page.tsx

export default function ThankYouPage() {
  return (
    <>
      <div className='flex flex-col min-h-screen bg-gray-50'>
        <Header />
        <section className='flex-1 flex items-center justify-center p-4'>
          <div className='max-w-lg w-full text-center bg-white shadow-lg rounded-2xl p-8 animate-fadeIn'>
            {/* Icon */}
            <div className='flex justify-center mb-4'>
              <svg
                className='w-16 h-16 text-[#008837] animate-bounce'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z'
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className='text-2xl font-bold text-[#FFB300] mb-2'>
              Thank you for contacting <br />
              PT Superhelindo Jaya!
            </h1>
            <p className='text-gray-600 mb-6 text-lg mt-5'>
              Your message has been received, and our team will be in touch with you soon.
            </p>

            {/* CTA */}
            <div className='flex flex-wrap gap-3 justify-center'>
              <Link
                href='/'
                className='px-6 py-3 bg-[#008837] text-white rounded-lg hover:scale-105 hover:shadow-lg transition'
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
  // return (
  //   <div className='min-h-screen flex flex-col bg-gray-50'>
  //     <Header />
  //     <div className='flex flex-1 flex-col items-center justify-center px-4'>
  //       <div className='bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center'>
  //         <h1 className='text-3xl font-bold text-[#C48A04] mb-4'>Terima Kasih!</h1>
  //         <p className='text-gray-700 mb-6'>
  //           Pesan Anda telah kami terima. Kami akan segera menghubungi Anda kembali.
  //         </p>
  //         <Link
  //           href='/'
  //           className='inline-block mt-4 px-6 py-2 bg-[#008837] text-white rounded hover:bg-green-700 transition'
  //         >
  //           Kembali ke Beranda
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
}
