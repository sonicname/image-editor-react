import { memo, ReactNode } from 'react';

import SidebarLeft from '../sidebar/SidebarLeft';
import SidebarRight from '../sidebar/SidebarRight';

interface IEditorLayoutProps {
  children: ReactNode;
  className?: string;
}

const EditorLayout = ({ children }: IEditorLayoutProps) => {
  return (
    <div className='min-h-screen flex select-none'>
      <SidebarLeft />
      {children}
      <SidebarRight />
    </div>
  );
};

export default memo(EditorLayout);
