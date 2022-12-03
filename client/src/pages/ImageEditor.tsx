import { useState } from 'react';
import classNames from 'classnames';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';

import IconClose from '../components/icons/IconClose';
import EditorLayout from '../components/layouts/EditorLayout';

const ImageEditor = () => {
  const [images, setImages] = useState([]);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  return (
    <EditorLayout>
      <div className='p-2 lg:p-4 flex items-center justify-center flex-1 bg-gray-200'>
        <ReactImageUploading value={images} maxNumber={1} onChange={onChange}>
          {({ imageList, onImageUpload, isDragging, dragProps, onImageRemove }) => {
            return (
              <>
                {imageList.length > 0 ? (
                  <div className='w-3xl h-[567px] rounded overflow-hidden shadow-lg relative'>
                    <img
                      className='w-full h-full block object-scale-down'
                      src={imageList[0].dataURL}
                      alt=''
                    />

                    <div
                      className='p-1 rounded-md absolute top-0 right-0 m-2 cursor-pointer bg-white hover:scale-105 duration-100'
                      onClick={() => onImageRemove(0)}
                    >
                      <IconClose />
                    </div>
                  </div>
                ) : (
                  <div
                    className={classNames(
                      'w-3xl h-[567px] flex-1 flex items-center justify-center border-2 border-gray-400 rounded-md border-dashed',
                      isDragging && 'bg-black bg-opacity-40',
                    )}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <span className='font-medium'>drag your image here</span>
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
