import { ReactNode } from 'react';
import classNames from 'classnames';

import IconDown from '../icons/IconDown';
import useToggle from '../../hooks/useToggle';

interface ISidebarItemProps {
  children?: ReactNode;
  content: string;
}

const SideBarItem = ({ children, content }: ISidebarItemProps) => {
  const { isToggled, toggle } = useToggle();

  return (
    <div
      className='py-2 lg:py-4 cursor-pointer min-w-[200px] relative border border-gray-300 border-l-transparent border-r-transparent border-t-transparent last:border-b-transparent'
      onClick={toggle}
    >
      <div className='flex items-center justify-between px-2 lg:px-4'>
        <span className='text-base font-medium'>{content}</span>
        <IconDown className={classNames(isToggled ? '-rotate-90' : 'rotate-90', 'duration-150')} />
      </div>
      {children}
    </div>
  );
};

export default SideBarItem;
