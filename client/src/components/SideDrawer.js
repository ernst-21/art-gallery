import React, {memo} from 'react';
import { Drawer } from 'antd';
import { MdClose } from 'react-icons/md';

const SideDrawer = ({component, isSideDrawerOpen, onDrawerClose, width, placement, title, drawerStyle}) => {
  return (
    <div>
      <Drawer
        title={title}
        drawerStyle={drawerStyle}
        width={width}
        placement={placement}
        closable={true}
        closeIcon={<MdClose />}
        onClose={onDrawerClose}
        visible={isSideDrawerOpen}
      >{component}</Drawer>
    </div>
  );
};

export default memo(SideDrawer);
