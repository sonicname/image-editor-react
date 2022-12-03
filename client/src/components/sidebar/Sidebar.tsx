import { memo } from 'react';
import classNames from 'classnames';

import SideBarItem from './SideBarItem';
import SidebarItemContent from './SidebarItemContent';

interface IColorTools {
  title: string;
  id: string;
  min?: number;
  max?: number;
  defaultValue?: number;
}

interface IButtonToolList {
  title: string;
  id: string;
}

const colorTools: IColorTools[] = [
  {
    id: 'brightness',
    title: 'Brightness',
    min: -100,
    max: 100,
    defaultValue: 0,
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
    max: 100,
    defaultValue: 50,
  },
  {
    id: 'contrast',
    title: 'Contrast',
    min: 0,
    max: 100,
    defaultValue: 50,
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
    defaultValue: 0,
  },
];

const buttonList: IButtonToolList[] = [
  {
    title: 'Rotate 90°',
    id: 'rorate-90deg',
  },
  {
    title: 'Flip',
    id: 'flip',
  },
];

const Sidebar = () => {
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
              onChange={(e) => console.log(e.target.value)}
            />
          </SidebarItemContent>
        ))}
      </SideBarItem>

      <SideBarItem content='Rotate & Flip'>
        <div className='p-2 lg:p-4 flex flex-wrap gap-2 lg:gap-4'>
          {buttonList.map((button) => (
            <button
              key={button.id}
              className='p-2 rounded-md border border-gray-300 text-black font-semibold hover:bg-green-400 hover:text-white shadow-md active:scale-90 duration-150'
            >
              {button.title}
            </button>
          ))}
        </div>
      </SideBarItem>
      <SideBarItem content='Filter' />
    </div>
  );
};

export default memo(Sidebar);
