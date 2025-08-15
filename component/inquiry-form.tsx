'use client';
import LayoutSection from './layout-section';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
};

const Input = ({ label, required = false, ...props }: InputProps) => (
  <input
    placeholder={`${label}${required ? ' *' : ''}`}
    className='w-[305px] max-w-full px-4 py-2 bg-[#3C3C3C] text-white placeholder:text-gray-300 placeholder:tracking-wide placeholder:font-medium rounded-md border border-[#535353] focus:outline-none focus:ring-2 focus:ring-green-500'
    {...props}
  />
);

import React, { useState } from 'react';

const InquiryForm = () => {
  const [fields, setFields] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fields.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!fields.emailAddress.trim()) {
      newErrors.emailAddress = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(fields.emailAddress)) {
      newErrors.emailAddress = 'Invalid email format';
    }
    if (!fields.phoneNumber.trim()) newErrors.phoneNumber = 'Phone/Whatsapp is required';
    if (!fields.companyName.trim()) newErrors.companyName = 'Company Name is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fields),
        });

        const result = await res.json();
        if (result?.status === 'success') {
          setFields({ fullName: '', emailAddress: '', phoneNumber: '', companyName: '' });

          const eventFor = 'Inquiry Form';
          await fetch('/api/event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              eventID: eventFor,
              eventName: 'Lead',
              email: fields.emailAddress,
              phone: fields.phoneNumber,
              customData: {
                event_name: eventFor,
                content_name: eventFor,
                name: fields.fullName,
                company_name: fields.companyName,
              },
            }),
          })
            .then((res) => res.json())
            .catch((err) => {
              console.error('Error posting meta event:', err);
            });

          // Navigate to thankyou and force reload to ensure GTM is re-initialized
          window.location.href = '/thankyou';
        } else {
          alert('Form submission failed.');
        }
      } catch (err) {
        console.error('Form submission failed:', err);
        alert('Form submission failed.');
      }
      setLoading(false);
      setSubmitted(false);
    }
  };

  return (
    <LayoutSection
      id='inquiry'
      classNameSection='bg-[#232323]'
      classNameContainer='flex flex-col items-center justify-center text-center gap-[40px] sm:gap-[50px] container mx-auto'
    >
      <div className='flex flex-col gap-2.5'>
        <div
          className={`text-2xl sm:text-[42px] text-[#FFB300] font-bold leading-[130%] uppercase `}
        >
          Want to know more?
        </div>
        <p className='text-base sm:text-xl text-white'>
          For inquiries about new product installation, modernization, quotation or any other
          related questions regarding services, please e-mail us. Our dedicated team will get back
          to you within 24 hours.
        </p>
      </div>
      <form id='inquiry-form' onSubmit={handleSubmit} noValidate>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[50px]'>
          <div>
            <Input
              label='Full Name'
              required
              name='fullName'
              value={fields.fullName}
              onChange={handleChange}
              autoComplete='off'
              disabled={loading}
            />
            {submitted && errors.fullName && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.name}</div>
            )}
          </div>
          <div>
            <Input
              label='Email'
              required
              name='emailAddress'
              type='email'
              value={fields.emailAddress}
              onChange={handleChange}
              autoComplete='off'
              disabled={loading}
            />
            {submitted && errors.emailAddress && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.emailAddress}</div>
            )}
          </div>
          <div>
            <Input
              label='Phone/Whatsapp'
              required
              name='phoneNumber'
              type='tel'
              value={fields.phoneNumber}
              onChange={handleChange}
              autoComplete='off'
              disabled={loading}
            />
            {submitted && errors.phoneNumber && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.phoneNumber}</div>
            )}
          </div>
          <div>
            <Input
              label='Company Name'
              required
              name='companyName'
              value={fields.companyName}
              onChange={handleChange}
              autoComplete='off'
              disabled={loading}
            />
            {submitted && errors.companyName && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.companyName}</div>
            )}
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            id='submit-button-inquiry'
            type='submit'
            className={`px-6 py-3 text-white font-bold uppercase rounded-full border border-[#FCF2D9] bg-gradient-to-r from-[#008837] to-[#FFB300] hover:from-green-700 hover:to-yellow-500 transition flex items-center justify-center`}
            disabled={loading}
          >
            {loading ? (
              <span className='flex items-center gap-2'>
                <svg
                  className='animate-spin h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              'Get an Exclusive Offer Today!'
            )}
          </button>
        </div>
      </form>
    </LayoutSection>
  );
};

export default InquiryForm;
