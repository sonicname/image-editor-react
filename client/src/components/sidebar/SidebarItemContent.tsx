import { ReactNode } from 'react';
import classNames from 'classnames';

interface ISidebarItemContentProps {
  className?: string;
  children?: ReactNode;
}

const SidebarItemContent = ({ children, className }: ISidebarItemContentProps) => {
  return (
    <div className={classNames('p-2 bg-white rounded flex flex-col gap-y-2', className)}>
      {children}
    </div>
  );
};

export default SidebarItemContent;
