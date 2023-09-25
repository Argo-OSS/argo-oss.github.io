import { useRef } from 'react';
import Image from 'next/image';
import filterIcon from '@components/img/filter.png';
import useDetectClose from '@components/hooks/useDetectClose';

const DropdownContainer = ({ children }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  return (
    <div ref={dropDownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="hover:cursor-pointer hover:bg-gray-300 rounded-md px-1">
        <Image src={filterIcon} width="15" height="15" alt="filter" />
      </button>

      <div className="relative">
        <div className={'absolute max-w-[15rem] p-2 rounded-md bg-gray-200 ' + (isOpen ? 'visible' : 'invisible')}>{children}</div>
      </div>
    </div>
  );
};

export default DropdownContainer;
