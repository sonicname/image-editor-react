import { memo } from 'react';

import SideBarItem from './SideBarItem';

const SidebarRight = () => {
  return (
    <div className={'py-2 flex flex-col h-screen w-60 overflow-y-scroll text-black shadow-md'}>
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
      <SideBarItem content='Filter'>
        <div className='p-2 lg:p-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel quae excepturi
          maiores autem quasi. Sapiente nemo laborum illo deserunt perspiciatis labore, obcaecati,
          optio officia voluptatibus ratione, assumenda ullam doloribus?
        </div>
      </SideBarItem>
    </div>
  );
};

export default memo(SidebarRight);
