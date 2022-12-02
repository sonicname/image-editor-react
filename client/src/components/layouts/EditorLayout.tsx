import { ReactNode } from 'react';
import Sidebar from '../sidebar/Sidebar';

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

export default EditorLayout;
