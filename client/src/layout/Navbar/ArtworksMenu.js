import React from 'react';
import MenuDropDown from './MenuDropDown';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {isActive} from '../../utils/navlinkStyles';

const ArtworksCategories = (props) => {
  return (
    <Menu>
      <Menu.Item key='3'>
        <NavLink style={isActive(props.history, '/artworks/category/all')} to={'/artworks/category/all'}>All</NavLink>
      </Menu.Item>
      <Menu.Item key='4'>
        <NavLink style={isActive(props.history, '/artworks/category/painting')} to={'/artworks/category/painting'}>Painting</NavLink>
      </Menu.Item>
      <Menu.Item key='5'>
        <NavLink style={isActive(props.history, '/artworks/category/photography')} to={'/artworks/category/photography'}>Photography</NavLink>
      </Menu.Item>
      <Menu.Item key='6'>
        <NavLink style={isActive(props.history, '/artworks/category/print')} to={'/artworks/category/print'}>Print</NavLink>
      </Menu.Item>
      <Menu.Item key='7'>
        <NavLink style={isActive(props.history, '/artworks/category/sculpture')} to={'/artworks/category/sculpture'}>Sculpture</NavLink>
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
