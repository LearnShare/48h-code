import React, {
  useContext,
} from 'react';

import DropdownContext from '../dropdown/context';

import './index.scss';

function PopupContent({
  children,
}) {
  // dropdown context
  const {
    hideMenu,
  } = useContext(DropdownContext);

  return (
    <div className="popup-content">
      <p>{ children }</p>
      <button
          onClick={ hideMenu }>好的</button>
    </div>
  );
}

export default PopupContent;
