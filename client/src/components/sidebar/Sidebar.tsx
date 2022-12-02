import classNames from 'classnames';

import SideBarItem from './SideBarItem';
import IconDown from '../icons/IconDown';

import useToggle from '../../hooks/useToggle';

const Sidebar = () => {
  const { isToggled, toggle } = useToggle();
  return (
    <div className='relative'>
      <div
        className={classNames(
          'py-5 flex flex-col min-h-screen text-black shadow-md overflow-hidden',
          isToggled ? 'w-0 invisible' : 'w-auto visible',
        )}
      >
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

      <div className='absolute top-0 left-full m-1 p-2 bg-white rounded-sm' onClick={toggle}>
        <IconDown className={classNames(isToggled ? 'rotate-90' : '-rotate-90', 'duration-100')} />
      </div>
    </div>
  );
};

export default Sidebar;
