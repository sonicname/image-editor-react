import { memo } from 'react';
import classNames from 'classnames';

import SideBarItem from './SideBarItem';

const SidebarRight = () => {
  return (
    <div
      className={classNames(
        'py-5 flex flex-col h-screen w-60 overflow-y-scroll text-black shadow-md',
      )}
    >
      <h2 className='text-center font-semibold mb-2'>Editor Tools</h2>

      <SideBarItem content='Rotate & Flip'>
        <div className='p-2 lg:p-4 grid grid-cols-2 gap-2 lg:gap-4'>
          <button className='p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75'>
            <img className='w-6 h-6 object-cover' src='/rotate.png' alt='rorate' />
          </button>

          <button className='p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75'>
            <img className='w-6 h-6 object-cover scale-x-[-1]' src='/rotate.png' alt='rorate' />
          </button>

          <button className='p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75'>
            <img className='w-6 h-6 object-cover' src='/flip.png' alt='rorate' />
          </button>

          <button className='p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75'>
            <img className='w-6 h-6 object-cover -rotate-90' src='/flip.png' alt='rorate' />
          </button>
        </div>
      </SideBarItem>
      <SideBarItem content='Filter' />
    </div>
  );
};

export default memo(SidebarRight);
