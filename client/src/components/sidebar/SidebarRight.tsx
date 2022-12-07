import { memo } from 'react';
import classNames from 'classnames';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SideBarItem from './SideBarItem';
import FilterItem from '../filter/FilterItem';

import useEditorStore from '../../store/useEditorStore';

const SidebarRight = () => {
  const { setRotateDeg, isFlipped, isReverseFlipped, touchedFlipped, touchedReverseFlip, image } =
    useEditorStore();

  return (
    <div className='py-2 flex flex-col h-screen w-60 overflow-y-scroll text-black shadow-md'>
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
          <Swiper
            spaceBetween={10}
            grabCursor={true}
            slidesPerView={'auto'}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
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
    </div>
  );
};

export default memo(SidebarRight);
