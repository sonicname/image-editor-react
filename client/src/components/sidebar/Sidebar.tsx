import { memo } from 'react';
import classNames from 'classnames';

import SideBarItem from './SideBarItem';
import SidebarItemContent from './SidebarItemContent';

import useEditorStore from '../../store/useEditorStore';

interface IColorTools {
  title: string;
  id: string;
  min?: number;
  max?: number;
  defaultValue?: number;
}

const colorTools: IColorTools[] = [
  {
    id: 'brightness',
    title: 'Brightness',
    min: 0,
    max: 200,
    defaultValue: 100,
  },
  {
    id: 'blur',
    title: 'Blur',
    min: 0,
    max: 100,
    defaultValue: 0,
  },
  {
    id: 'saturate',
    title: 'Saturate',
    min: 0,
    max: 200,
    defaultValue: 100,
  },
  {
    id: 'contrast',
    title: 'Contrast',
    min: 0,
    max: 200,
    defaultValue: 100,
  },
  {
    id: 'grayscale',
    title: 'Grayscale',
    min: 0,
    max: 100,
    defaultValue: 0,
  },
  {
    id: 'opacity',
    title: 'Opacity',
    min: 0,
    max: 100,
    defaultValue: 100,
  },
];

const Sidebar = () => {
  const { setOption } = useEditorStore();

  return (
    <div
      className={classNames(
        'py-5 flex flex-col h-screen w-60 overflow-y-scroll text-black shadow-md',
      )}
    >
      <h2 className='text-center font-semibold mb-2'>Editor Tools</h2>
      <SideBarItem content='Color'>
        {colorTools.map((tool) => (
          <SidebarItemContent key={tool.id}>
            <label htmlFor={tool.id} className='font-light text-sm text-black'>
              {tool.title}
            </label>
            <input
              min={tool.min}
              defaultValue={tool.defaultValue}
              max={tool.max}
              type={'range'}
              id={tool.id}
              onChange={(e) => setOption(tool.id, parseInt(e.target.value))}
            />
          </SidebarItemContent>
        ))}
      </SideBarItem>

      <SideBarItem content='Rotate & Flip'>
        <div className='p-2 lg:p-4 flex flex-wrap gap-2 lg:gap-4'>
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

export default memo(Sidebar);
