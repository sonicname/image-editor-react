import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

import SideBarItem from './SideBarItem';
import FilterItem from '../filter/FilterItem';

import dataURLToFile from '../../utils/dataURLToFile';
import covertToDataURL from '../../utils/covertToDataURL';

import useEditorStore from '../../store/useEditorStore';

import { useDownscale, useNoiseRemove, useUpscale } from '../../hooks/useAdvancedEditor';

const SidebarRight = () => {
  const {
    setRotateDeg,
    isFlipped,
    isReverseFlipped,
    touchedFlipped,
    touchedReverseFlip,
    image,
    brightness,
    blur,
    contrast,
    grayscale,
    invert,
    opacity,
    rotateDeg,
    saturate,
    sepia,
  } = useEditorStore();

  const handleUpscaleImage = () => {
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

      useUpscale(dataURLToFile(dataURL));
    };
  };

  const handleDownscaleImage = () => {
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

      useDownscale(dataURLToFile(dataURL));
    };
  };

  const handleNoiseRemove = () => {
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

      useNoiseRemove(dataURLToFile(dataURL));
    };
  };

  return (
    <div className='py-2 flex flex-col h-screen w-60 overflow-y-scroll text-black shadow-md scrollbar-none'>
      <SideBarItem content='Rotate & Flip'>
        <div className='p-2 lg:p-4 grid grid-cols-2 gap-2 lg:gap-4'>
          <button
            className='p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75'
            onClick={() => setRotateDeg(90)}
            disabled={image.length == 0}
          >
            <img className='w-6 h-6 object-cover' src='/rotate.png' alt='rorate' />
          </button>

          <button
            className='p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75'
            onClick={() => setRotateDeg(-90)}
            disabled={image.length == 0}
          >
            <img className='w-6 h-6 object-cover scale-x-[-1]' src='/rotate.png' alt='rorate' />
          </button>

          <button
            className={classNames(
              'p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75',
              isFlipped && 'bg-green-500 text-white',
            )}
            onClick={touchedFlipped}
            disabled={image.length == 0}
          >
            <img className='w-6 h-6 object-cover' src='/flip.png' alt='rorate' />
          </button>

          <button
            className={classNames(
              'p-2 flex items-center justify-center shadow-md rounded-md border border-gray-300 active:scale-90 duration-75',
              isReverseFlipped && 'bg-green-500 text-white',
            )}
            onClick={touchedReverseFlip}
            disabled={image.length == 0}
          >
            <img className='w-6 h-6 object-cover -rotate-90' src='/flip.png' alt='rorate' />
          </button>
        </div>
      </SideBarItem>
      <SideBarItem content='Filter'>
        <div className='p-2 lg:p-4'>
          <Swiper spaceBetween={10} grabCursor={true} slidesPerView={'auto'}>
            <SwiperSlide>
              <FilterItem invert={100} />
            </SwiperSlide>

            <SwiperSlide>
              <FilterItem brightness={150} saturate={140} />
            </SwiperSlide>

            <SwiperSlide>
              <FilterItem brightness={200} saturate={180} />
            </SwiperSlide>
          </Swiper>
        </div>
      </SideBarItem>

      <SideBarItem content='Advanced'>
        <div className='p-2 lg:p-4 flex gap-2 lg:gap-4 flex-col'>
          <button
            onClick={handleUpscaleImage}
            className='p-2 font-medium bg-blue-500 rounded-md text-white shadow-md active:scale-90 duration-100'
          >
            Upscale
          </button>
          <button
            onClick={handleDownscaleImage}
            className='p-2 font-medium bg-blue-500 rounded-md text-white shadow-md active:scale-90 duration-100'
          >
            Downscale
          </button>
          <button
            onClick={handleNoiseRemove}
            className='p-2 font-medium bg-blue-500 rounded-md text-white shadow-md active:scale-90 duration-100'
          >
            Noise Remove
          </button>
        </div>
      </SideBarItem>
    </div>
  );
};

export default SidebarRight;
