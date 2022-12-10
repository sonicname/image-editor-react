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
    max: 10,
    step: 1,
    defaultValue: 0,
  },
  {
    id: 'saturate',
    title: 'Saturate',
    min: 100,
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
    step: 50,
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
    image,
    rotateDeg,
    isFlipped,
    isReverseFlipped,
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

  const saveImage = () => {
    const imageDl = new Image();
    imageDl.crossOrigin = 'anonymous';
    imageDl.src = image[0].dataURL as string;

    imageDl.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      canvas.width = imageDl.width;
      canvas.height = imageDl.height;

      ctx.save();

      ctx.filter = `blur(${blur}px) brightness(${brightness}%) saturate(${saturate}%) contrast(${contrast}%) grayscale(${grayscale}%) opacity(${opacity}%) invert(${invert}%) sepia(${sepia}%)`;

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(isFlipped ? -1 : 1, isReverseFlipped ? -1 : 1);

      if (rotateDeg != 0 && (isFlipped || isReverseFlipped))
        ctx.rotate(((rotateDeg + (rotateDeg == 180 ? 0 : 180)) * Math.PI) / 180);
      else if (rotateDeg != 0) ctx.rotate((rotateDeg * Math.PI) / 180);

      ctx.drawImage(
        imageDl,
        -imageDl.width / 2,
        -imageDl.height / 2,
        imageDl.width,
        imageDl.height,
      );

      ctx.restore();

      const a = document.createElement('a');
      a.download = `edited.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
  };

  return (
    <div className='py-2 flex flex-col gap-y-2 lg:gap-y-4 h-screen w-60 overflow-y-scroll text-black shadow-md'>
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
              value={getStateVal(tool.id)}
              max={tool.max}
              type={'range'}
              step={tool.step}
              id={tool.id}
              onChange={(e) => setOption(tool.id, parseInt(e.target.value))}
              disabled={image.length == 0}
            />
          </SidebarItemContent>
        ))}
      </SideBarItem>

      <SideBarItem content='Reset & Save'>
        <div className='p-2 lg:p-4 flex flex-col gap-y-2 lg:gap-y-4'>
          <button
            onClick={resetOption}
            className='w-full bg-gray-400 text-white p-2 rounded-md shadow-md active:scale-90 duration-100'
          >
            Reset
          </button>

          <button
            onClick={saveImage}
            className='w-full bg-green-500 text-white p-2 rounded-md shadow-md active:scale-90 duration-100'
          >
            Save
          </button>
        </div>
      </SideBarItem>
    </div>
  );
};

export default SidebarLeft;
