import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

import DropdownContext from './context';

import './index.scss';

function Dropdown({
  label,
  button,
  children,
}) {
  // root element
  const rootElement = useRef();

  // is menu open
  const [
    open,
    setOpen,
  ] = useState(false);

  // toggle menu open or close
  const toggleMenu = (value) => {
    if (value !== undefined) {
      setOpen(value);
    } else {
      setOpen((oldValue) => !oldValue);
    }
  };

  // hide menu if click outside
  const hideMenu = (event) => {
    const {
      current,
    } = rootElement;
    const {
      target,
    } = event;

    if (!current) {
      return;
    }

    // check node relationship
    if (!current.contains(target)
        && current !== target) {
      setOpen(false);
    }
  };

  // click outside to hide
  useEffect(() => {
    if (rootElement.current
        && open) {
      document.addEventListener('click', hideMenu);
    }

    return () => document.removeEventListener('click', hideMenu);
  }, [
    rootElement,
    open,
  ]);

  return (
    <div
        className="dropdown"
        ref={ rootElement }>
      <DropdownContext.Provider
          value={ {
            toggleMenu: () => toggleMenu(),
            hideMenu: () => toggleMenu(false),
          } }>
        {
          !button && (
            <button
                className="dropdown-button"
                onClick={ () => toggleMenu() }>{ label }</button>
          )
        }
        { button }
        {
          open && (
            <div className="dropdown-popup">
              { children }
            </div>
          )
        }
      </DropdownContext.Provider>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  button: PropTypes.element,
};

Dropdown.defaultProps = {
  label: '',
  button: null,
};

export default Dropdown;
