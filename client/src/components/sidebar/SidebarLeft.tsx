import SideBarItem from './SideBarItem';
import SidebarItemContent from './SidebarItemContent';

import { colorTools } from '../../constants/constants';

import useEditorStore from '../../store/useEditorStore';
import covertToDataURL from '../../utils/covertToDataURL';

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

    imageDl.onload = async () => {
      const dataURL = await covertToDataURL(imageDl, {
        blur,
        brightness,
        rotateDeg,
        contrast,
        invert,
        grayscale,
        isFlipped,
        isReverseFlipped,
        opacity,
        saturate,
        sepia,
      });

      const a = document.createElement('a');
      a.download = `edited.png`;
      a.href = dataURL;
      a.click();
    };
  };

  return (
    <div className='py-2 flex flex-col gap-y-2 lg:gap-y-4 h-screen w-60 overflow-y-scroll text-black shadow-md scrollbar-none'>
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
