import { memo } from 'react';
import classNames from 'classnames';

import useEditorStore from '../../store/useEditorStore';

interface IFilterItemProps {
  brightness?: number;
  blur?: number;
  saturate?: number;
  contrast?: number;
  opacity?: number;
  grayscale?: number;
  sepia?: number;
  invert?: number;
  className?: string;
  title?: string;
}

const FilterItem = ({
  blur = 0,
  brightness = 100,
  contrast = 100,
  grayscale = 0,
  invert = 0,
  opacity = 100,
  saturate = 100,
  sepia = 0,
  className,
}: IFilterItemProps) => {
  const { image, setOption } = useEditorStore();

  const handleSelectFilter = () => {
    setOption('brightness', brightness);
    setOption('blur', blur);
    setOption('contrast', contrast);
    setOption('grayscale', grayscale);
    setOption('invert', invert);
    setOption('opacity', opacity);
    setOption('saturate', saturate);
    setOption('sepia', sepia);
  };

  return (
    <div
      className='w-36 h-28 rounded-md shadow-md overflow-hidden border border-gray-300'
      onClick={handleSelectFilter}
    >
      <img
        className={classNames('w-full h-full object-cover', className)}
        style={{
          filter: `blur(${blur}px) brightness(${brightness}%) saturate(${saturate}%) contrast(${contrast}%) grayscale(${grayscale}%) opacity(${opacity}%) invert(${invert}%) sepia(${sepia}%)`,
        }}
        src={image.length != 0 ? image[0].dataURL : '/logo.png'}
      />
    </div>
  );
};

export default memo(FilterItem);
