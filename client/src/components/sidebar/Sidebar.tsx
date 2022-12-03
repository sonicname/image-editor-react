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

const Sidebar = () => {
  return (
    <div className='relative'>
      <div
        className={classNames(
          'py-5 flex flex-col min-h-screen max-h-screen overflow-y-scroll text-black shadow-md',
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

        <SideBarItem content='Rotate & Flip' />
        <SideBarItem content='Filter' />
      </div>
    </div>
  );
};

export default memo(Sidebar);
