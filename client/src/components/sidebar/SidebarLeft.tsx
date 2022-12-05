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
  {
    id: 'invert',
    title: 'Invert',
    min: 0,
    max: 100,
    defaultValue: 0,
  },
  {
    id: 'sepia',
    title: 'Sepia',
    min: 0,
    max: 100,
    defaultValue: 0,
  },
];

const SidebarLeft = () => {
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
            <label
              htmlFor={tool.id}
              className='font-light text-sm text-black flex gap-x-2 items-center'
            >
              {tool.title}
              <span className='p-1 rounded bg-blue-500 text-white text-xs shadow-md'>
                {(document.getElementById(`${tool.id}`) as HTMLInputElement)?.value}
              </span>
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
    </div>
  );
};

export default memo(SidebarLeft);
