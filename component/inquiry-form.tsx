'use client';
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

import React, { useState } from 'react';

const InquiryForm = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fields.name.trim()) newErrors.name = 'Full Name is required';
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(fields.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!fields.phone.trim()) newErrors.phone = 'Phone/Whatsapp is required';
    if (!fields.company.trim()) newErrors.company = 'Company Name is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here (e.g., API call)
      alert('Form submitted successfully!');
      setFields({ name: '', email: '', phone: '', company: '' });
      setSubmitted(false);
    }
  };

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
      <form id='inquiry-form' onSubmit={handleSubmit} noValidate>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-[50px]'>
          <div>
            <Input
              label='Full Name'
              required
              name='name'
              value={fields.name}
              onChange={handleChange}
              autoComplete='off'
            />
            {submitted && errors.name && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.name}</div>
            )}
          </div>
          <div>
            <Input
              label='Email'
              required
              name='email'
              type='email'
              value={fields.email}
              onChange={handleChange}
              autoComplete='off'
            />
            {submitted && errors.email && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.email}</div>
            )}
          </div>
          <div>
            <Input
              label='Phone/Whatsapp'
              required
              name='phone'
              type='tel'
              value={fields.phone}
              onChange={handleChange}
              autoComplete='off'
            />
            {submitted && errors.phone && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.phone}</div>
            )}
          </div>
          <div>
            <Input
              label='Company Name'
              required
              name='company'
              value={fields.company}
              onChange={handleChange}
              autoComplete='off'
            />
            {submitted && errors.company && (
              <div className='text-red-400 text-xs mt-1 text-left'>{errors.company}</div>
            )}
          </div>
        </div>

        <button
          type='submit'
          className={`px-6 py-3 text-white font-bold uppercase rounded-full border border-[#FCF2D9] bg-gradient-to-r from-[#008837] to-[#FFB300] hover:from-green-700 hover:to-yellow-500 transition`}
        >
          Get an Exclusive Offer Today!
        </button>
      </form>
    </LayoutSection>
  );
};

export default InquiryForm;
