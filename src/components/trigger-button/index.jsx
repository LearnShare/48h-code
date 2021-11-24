import React, {
  useContext,
} from 'react';

import DropdownContext from '../dropdown/context';

import './index.scss';

function TriggerButton({
  children,
}) {
  // dropdown context
  const {
    toggleMenu,
  } = useContext(DropdownContext);

  return (
    <div
        className="trigger-button"
        onClick={ toggleMenu }>{ children }</div>
  );
}

export default TriggerButton;
