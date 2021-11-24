import React, {
  useContext,
} from 'react';
import PropTypes from 'prop-types';

import DropdownContext from './context';

import './menu.scss';

function DropdownMenu({
  options,
  onSelect,
}) {
  // dropdown context
  const {
    hideMenu,
  } = useContext(DropdownContext);

  // item on click
  const itemOnClick = (item) => {
    onSelect(item.value);

    hideMenu();
  };

  return (
    <ul className="dropdown-menu">
      {
        options.map((item) => (
          <li
              key={ item.value }
              onClick={ () => itemOnClick(item) }>{ item.label }</li>
        ))
      }
    </ul>
  );
}

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    label: PropTypes.string,
  })),
  onSelect: PropTypes.func,
};

DropdownMenu.defaultProps = {
  options: [],
  onSelect: () => {},
};

export default DropdownMenu;
