import React, { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  withArrow?: boolean;
  style?: string;
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  withArrow,
  style,
}) => {
  return (
    <div
      className={`border-white border-2 p-[4px] text-[13px] text-primary max-w-[320px] cursor-pointer text-center  ${style}`}
    >
      {children}
    </div>
  );
};
