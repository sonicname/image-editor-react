import Sidebar from '../sidebar/Sidebar';
import { memo, ReactNode } from 'react';

interface IEditorLayoutProps {
  children: ReactNode;
  className?: string;
}

const EditorLayout = ({ children, className }: IEditorLayoutProps) => {
  return (
    <div className='min-h-screen flex select-none'>
      <Sidebar />
      {children}
    </div>
  );
};

export default memo(EditorLayout);
