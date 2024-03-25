import React from 'react';
import Link from '../../../../node_modules/next/link';
import Github from '../../../../public/github.svg';
import Linkedin from '../../../../public/linkedin.svg';
import Codepen from '../../../../public/codepen.svg';
import Instagram from '../../../../public/instagram.svg';
import Image from '../../../../node_modules/next/image';

interface SideElementProps {
  right?: boolean;
}

export const SideElement = ({ right }: SideElementProps) => {
  return (
    <div
      className={`w-[40px] fixed bottom-0 z-2 ${
        right ? 'right-[40px] left-auto' : 'left-[40px] right-auto'
      }`}
    >
      <ul className='flex flex-col items-center m-0 p-0 list-none after:block after:h-[90px] after:content-"" after:display-block after:w-[1px] after:mx-auto after:bg-white'>
        {right ? (
          <li
            style={{ writingMode: 'vertical-rl' }}
            className='p-[10px] text-[12px] mb-[20px] tracking-widest'
          >
            <Link href='mailto:gytis.kymantas@yahoo.com'>
              gytis.kymantas@yahoo.com
            </Link>
          </li>
        ) : (
          <>
            <li className='p-[10px]'>
              <Link href='#' target='_blank'>
                <Image src={Github} width={90} height={90} alt='b' />
              </Link>
            </li>
            <li className='p-[10px]'>
              <Image src={Codepen} width={90} height={90} alt='b' />
            </li>
            <li className='p-[10px]'>
              <Image src={Linkedin} width={90} height={90} alt='b' />
            </li>
            <li className='p-[10px] mb-[20px]'>
              <Image src={Instagram} width={90} height={90} alt='b' />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
