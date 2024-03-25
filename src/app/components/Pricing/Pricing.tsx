import React from 'react';
import { SelectorSection } from './SelectorSection';

export const Pricing = () => {
  return (
    <section className='py-[100px] max-w-[700px] mx-[auto]'>
      <div className='flex flex-col gap-[50px]'>
        <div className='mt-[10px] mb-[40px]'>
          <h2 className='after:w-[200px] after:content-"" after:block after:top-[0] after:relative after:h-[1px] after:ml-[20px] after:bg-white text-[32px] flex items-center'>
            <span className='mr-[10px] text-2xl'>02.</span>
            Pricing
          </h2>
        </div>
        <p className=''>
          hello hello
          <br />
          <br />
        </p>

        <SelectorSection />
      </div>
    </section>
  );
};
