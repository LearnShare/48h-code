import React from 'react';

import Dropdown from './components/dropdown/index';
import DropdownMenu from './components/dropdown/menu';

import TriggerButton from './components/trigger-button/index';
import PopupContent from './components/popup-content/index';

const options = [
  {
    value: 'go-home',
    label: '下班'
  },
  {
    value: 'eat',
    label: '吃饭'
  },
  {
    value: 'sleep',
    label: '睡觉'
  },
];

function App() {
  return (
    <div className="app">
      <p>1. 使用默认的触发按钮，和菜单组件</p>
      <Dropdown
          label="准点">
        <DropdownMenu
            options={ options }
            onSelect={ (value) => console.log(value) } />
      </Dropdown>
      <p>2. 使用任意组件作为触发按钮和弹出内容</p>
      <Dropdown
          button={ (
            <TriggerButton>?</TriggerButton>
          ) }>
        <PopupContent>风平浪静</PopupContent>
      </Dropdown>
    </div>
  );
}

export default App;
