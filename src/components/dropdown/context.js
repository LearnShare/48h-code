import React from 'react';

const DropdownContext = React.createContext({
  toggleMenu: () => {},
  hideMenu: () => {},
});

DropdownContext.displayName = 'DropdownContext';

export default DropdownContext;
