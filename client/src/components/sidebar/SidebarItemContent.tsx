import { ReactNode, memo } from 'react';

interface ISidebarItemContentProps {
  className?: string;
  children?: ReactNode;
}

const SidebarItemContent = ({ children }: ISidebarItemContentProps) => {
  return (
    <div className='px-2 lg:px-4 bg-white rounded flex flex-col gap-y-2 mt-1 mb-1'>
      <div className='flex flex-col gap-y-2'>{children}</div>
    </div>
  );
};

export default memo(SidebarItemContent);
