import React from 'react';
import Link from '../../../../node_modules/next/link';
import { CONSTANTS_NAVIGATION } from '../../utils/constants/general';
import { PrimaryButton } from '../Buttons/PrimaryButton';

export const Navigation = () => {
  return (
    <div className='flex justify-between px-[90px] h-[100px] py-[45px] w-[100%] fixed'>
      <ol className='flex w-xs gap-3 items-center'>
        {CONSTANTS_NAVIGATION.map((link, index) => (
          <li className='mx-[5px] text-[13px] tracking-widest' key={index}>
            <Link href='#'>
              <span className='text-slate-200'>0{index}.</span> {link}
            </Link>
          </li>
        ))}
        <PrimaryButton style='ml-[15px] px-[8px] py=[12px]'>
          Resume
        </PrimaryButton>
      </ol>
    </div>
  );
};
