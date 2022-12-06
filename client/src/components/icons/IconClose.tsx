import { memo } from 'react';
import classNames from 'classnames';

const IconClose = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={classNames('w-4 h-4 lg:w-6 lg:h-6', className)}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
};

export default memo(IconClose);
