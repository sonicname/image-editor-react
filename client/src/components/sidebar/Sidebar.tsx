import classNames from 'classnames';

import SideBarItem from './SideBarItem';
import SidebarItemContent from './SidebarItemContent';

const Sidebar = () => {
  return (
    <div className='relative'>
      <div
        className={classNames(
          'py-5 flex flex-col min-h-screen max-h-screen overflow-y-scroll text-black shadow-md',
        )}
      >
        <h2 className='text-center font-semibold mb-2'>Editor Tools</h2>
        <SideBarItem content='Brightness'>
          <SidebarItemContent>
            <input type={'range'} id='brightness' onChange={(e) => console.log(e.target.value)} />
          </SidebarItemContent>
        </SideBarItem>
        <SideBarItem content='Blur'>
          <SidebarItemContent>
            <input type={'range'} id='blur' onChange={(e) => console.log(e.target.value)} />
          </SidebarItemContent>
        </SideBarItem>
        <SideBarItem content='Saturate'>
          <SidebarItemContent>
            <input type={'range'} id='saturate' onChange={(e) => console.log(e.target.value)} />
          </SidebarItemContent>
        </SideBarItem>
        <SideBarItem content='Contrast'>
          <SidebarItemContent>
            <input type={'range'} id='contrast' onChange={(e) => console.log(e.target.value)} />
          </SidebarItemContent>
        </SideBarItem>
        <SideBarItem content='RGB'>
          <SidebarItemContent>
            <input type={'range'} id='red' onChange={(e) => console.log(e.target.value)} />
            <input type={'range'} id='green' onChange={(e) => console.log(e.target.value)} />
            <input type={'range'} id='blue' onChange={(e) => console.log(e.target.value)} />
          </SidebarItemContent>
        </SideBarItem>
        <SideBarItem content='Grayscale'>
          <SidebarItemContent>
            <input type={'range'} id='grayscale' onChange={(e) => console.log(e.target.value)} />
          </SidebarItemContent>
        </SideBarItem>
        <SideBarItem content='Opacity'>
          <SidebarItemContent>
            <input type={'range'} id='opacity' onChange={(e) => console.log(e.target.value)} />
          </SidebarItemContent>
        </SideBarItem>
        <SideBarItem content='Filter' />
        <SideBarItem content='Rotate & Flip' />
      </div>
    </div>
  );
};

export default Sidebar;
