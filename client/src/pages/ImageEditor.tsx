import classNames from 'classnames';
import ReactImageUploading from 'react-images-uploading';

import IconClose from '../components/icons/IconClose';
import EditorLayout from '../components/layouts/EditorLayout';

import useEditorStore from '../store/useEditorStore';

const ImageEditor = () => {
  const {
    blur,
    brightness,
    contrast,
    grayscale,
    opacity,
    saturate,
    invert,
    sepia,
    isFlipped,
    isReverseFlipped,
    rotateDeg,
    setImage,
    image,
  } = useEditorStore();

  return (
    <EditorLayout>
      <div className='p-2 lg:p-4 flex items-center justify-center flex-1 bg-gray-200'>
        <ReactImageUploading
          value={image}
          maxNumber={1}
          onChange={(imageList) => setImage(imageList)}
        >
          {({ imageList, onImageUpload, isDragging, dragProps, onImageRemove }) => {
            return (
              <>
                {imageList.length > 0 ? (
                  <div className='max-w-3xl w-full h-[567px] overflow-hidden rounded shadow-lg relative'>
                    <img
                      className='w-full h-full block object-contain duration-150'
                      style={{
                        filter: `blur(${blur}px) brightness(${brightness}%) saturate(${saturate}%) contrast(${contrast}%) grayscale(${grayscale}%) opacity(${opacity}%) invert(${invert}%) sepia(${sepia}%)`,
                        rotate: `${rotateDeg}deg`,
                        transform: `${isFlipped ? 'scaleX(-1)' : 'scaleX(1)'} ${
                          isReverseFlipped ? 'scaleY(-1)' : 'scaleY(1)'
                        }`,
                      }}
                      src={image[0].dataURL}
                      alt='image edit'
                      id='image-data-edit'
                    />

                    <canvas id='image-edit' className='opacity-0 invisible' />

                    <div
                      className='p-1 rounded-md absolute top-0 right-0 m-2 cursor-pointer bg-white hover:scale-105 duration-100 shadow-lg'
                      onClick={() => onImageRemove(0)}
                    >
                      <IconClose />
                    </div>
                  </div>
                ) : (
                  <div
                    className={classNames(
                      'max-w-3xl w-full h-[567px] flex items-center justify-center border-2 border-gray-400 rounded-md border-dashed',
                      isDragging && 'bg-black bg-opacity-40',
                    )}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <span className='font-medium'>Drag your image here</span>
                  </div>
                )}
              </>
            );
          }}
        </ReactImageUploading>
      </div>
    </EditorLayout>
  );
};

export default ImageEditor;
