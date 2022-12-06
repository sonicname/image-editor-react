import { ChangeEvent, memo } from 'react';

import SideBarItem from './SideBarItem';
import SidebarItemContent from './SidebarItemContent';

import useEditorStore from '../../store/useEditorStore';

interface IColorTools {
  title: string;
  id: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
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
    step: 25,
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
  const {
    setOption,
    resetOption,
    blur,
    brightness,
    contrast,
    grayscale,
    invert,
    opacity,
    saturate,
    sepia,
  } = useEditorStore();

  const getStateVal = (optionID: string) => {
    switch (optionID) {
      case 'blur':
        return blur;
      case 'brightness':
        return brightness;
      case 'contrast':
        return contrast;
      case 'grayscale':
        return grayscale;
      case 'invert':
        return invert;
      case 'opacity':
        return opacity;
      case 'saturate':
        return saturate;
      default:
        return sepia;
    }
  };

  return (
    <div
      className={
        'py-2 flex flex-col gap-y-2 lg:gap-y-4 h-screen w-60 overflow-y-scroll text-black shadow-md'
      }
    >
      <SideBarItem content='Color'>
        {colorTools.map((tool) => (
          <SidebarItemContent key={tool.id}>
            <label
              htmlFor={tool.id}
              className='font-light text-sm text-black flex gap-x-2 items-center'
            >
              {tool.title}
              <span className='p-1 rounded bg-blue-500 text-white text-xs shadow-md'>
                {getStateVal(tool.id)}
              </span>
            </label>
            <input
              min={tool.min}
              defaultValue={getStateVal(tool.id)}
              value={getStateVal(tool.id)}
              max={tool.max}
              type={'range'}
              step={tool.step}
              id={tool.id}
              onChange={(e) => setOption(tool.id, parseInt(e.target.value))}
            />
          </SidebarItemContent>
        ))}
      </SideBarItem>

      <div className='p-2 lg:p-4'>
        <button
          onClick={resetOption}
          className='w-full bg-green-500 text-white p-2 rounded-md shadow-md active:scale-90 duration-100'
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default memo(SidebarLeft);
