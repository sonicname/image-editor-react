import SideBarItem from './SideBarItem';

const Sidebar = () => {
  return (
    <div className='py-5 flex flex-col min-h-screen text-black shadow-md'>
      <h2 className='text-center font-semibold mb-2'>Editor Tools</h2>
      <SideBarItem content='Brightness' />
      <SideBarItem content='Rotate & Flip' />
      <SideBarItem content='Blur' />
      <SideBarItem content='Saturate' />
      <SideBarItem content='Contrast' />
      <SideBarItem content='RGB' />
      <SideBarItem content='Grayscale' />
      <SideBarItem content='Opacity' />
      <SideBarItem content='Filter' />
    </div>
  );
};

export default Sidebar;
