import EditorLayout from '../components/layouts/EditorLayout';

const ImageEditor = () => {
  return (
    <EditorLayout>
      <div className='p-2 lg:p-4 flex items-center justify-center flex-1 bg-gray-200'>
        <div className='w-3xl h-[567px] rounded overflow-hidden shadow-lg'>
          <img
            className='w-full h-full block object-scale-down'
            src='https://i0.nekobot.xyz/4/5/2/4df68c3e36bfcadbda76bf1d5fe0a.png'
            alt=''
          />
        </div>
      </div>
    </EditorLayout>
  );
};

export default ImageEditor;
