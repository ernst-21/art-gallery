import React from 'react';
import { Dropdown } from 'antd';

const MenuDropDown = (props) => {
  return (
    <Dropdown overlay={props.overlay} {...props}>
      {props.children}
    </Dropdown>
  );
};

export default MenuDropDown;
