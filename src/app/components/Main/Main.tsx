import React from 'react';
import { PrimaryButton } from '../Buttons/PrimaryButton';

export const Main = () => {
  return (
    <div className='bg-primary h-screen max-w-[1000px] flex flex-col mx-auto justify-center'>
      <div className='flex flex-col'>
        <p className='delay-100 ml-[6px] tracking-widest'>Hi, my name is</p>
        <h1 className='delay-200 h-[88px] text-[80px] font-bold tracking-tight text-slate-200 '>
          Gytis Kymantas.
        </h1>
        <h2 className='text-[80px] font-bold tracking-tight text-slate-200'>
          I build things for the web
        </h2>
        <p className='text-[20px] mt-4 leading-normal max-w-[700px]'>
          {' '}
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products
        </p>
        <PrimaryButton style='py-[20px] text-[14px] px-[28px] w-[231px] mt-[50px]'>
          FIND OUT MORE
        </PrimaryButton>
      </div>
    </div>
  );
};
