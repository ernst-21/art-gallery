import React from 'react';
import MenuDropDown from './MenuDropDown';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {isActive} from '../../utils/navlinkStyles';

const ArtworksCategories = (props) => {
  return (
    <Menu>
      <Menu.Item>
        <NavLink style={isActive(props.history, '/artworks')} to={'/artworks'}>All</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink style={isActive(props.history, '/artworks/paintings')} to={'/artworks/paintings'}>Paintings</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink style={isActive(props.history, '/artworks/photography')} to={'/artworks/photography'}>Photography</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink style={isActive(props.history, '/artworks/prints')} to={'/artworks/prints'}>Prints</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink style={isActive(props.history, '/artworks/sculpture')} to={'/artworks/sculpture'}>Sculpture</NavLink>
      </Menu.Item>
    </Menu>
  );
};

const ArtworksMenu = (props) => {
  return (
    <MenuDropDown overlay={<ArtworksCategories history={props.history} />} placement='bottomCenter'>
      <a onClick={e => e.preventDefault()}>
        Artworks <DownOutlined />
      </a>
    </MenuDropDown>
  );
};

export default ArtworksMenu;
