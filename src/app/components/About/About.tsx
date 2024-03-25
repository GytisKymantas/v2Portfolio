import { CONSTANTS_SKILLS } from '@/app/utils/constants/general';
import React from 'react';
import Image from '../../../../node_modules/next/image';

export const About = () => {
  return (
    <section className='py-[100px] max-w-[900px] mx-[auto]'>
      <div className='flex gap-[50px]'>
        <div className='max-w-[475px]'>
          <div className='mt-[10px] mb-[40px]'>
            <h2 className='after:w-[200px] after:content-"" after:block after:top-[0] after:relative after:h-[1px] after:ml-[20px] after:bg-white text-[32px] flex items-center'>
              <span className='mr-[10px] text-2xl'>01.</span>
              About me
            </h2>
          </div>
          <p className=''>
            Hello! My name is Gytis and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
            <br />
            <br />
            Fast-forward to today, and I’ve had the privilege of working at{' '}
            <span>
              an advertising agency, a start-up, a huge corporation, and a
              student-led design studio.{' '}
            </span>
            My main focus these days is building accessible, inclusive products
            and digital experiences at <span>xxx</span> for a variety of
            clients.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className='mt-[20px] grid grid-cols-2 gap-x-10 list-none'>
            {' '}
            {CONSTANTS_SKILLS.map((skill, index) => (
              <li key={index}>{`▹ ${skill}`}</li>
            ))}
          </ul>
        </div>
        <div className="after:display-block after:absolute after:content-'' after:top-[14px] after:left-14px after:z-[-1] after:border">
          <Image alt='author' src='/gytis.png' width={300} height={300} />
        </div>
      </div>
    </section>
  );
};
