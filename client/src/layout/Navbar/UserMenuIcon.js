import React from 'react';
import MenuDropDown from './MenuDropDown';
import { Menu } from 'antd';
import {BiUser} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import auth from '../../modules/auth/auth-helper';
import SignoutBtn from '../../modules/auth/Signout';
import {isActive} from '../../utils/navlinkStyles';

const UserMenu = (props) => {
  return (
    auth.isAuthenticated() &&
    <Menu>
      <Menu.Item>
        <NavLink style={isActive(props.history, '/user/' + auth.isAuthenticated().user._id)} to={'/user/' + auth.isAuthenticated().user._id}>
          My Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink style={isActive(props.history, '/artworks')} to={'/artworks'}>My Artworks</NavLink>
      </Menu.Item>
      <Menu.Item>
        <SignoutBtn />
      </Menu.Item>
    </Menu>
  );
};

const UserMenuIcon = (props) => {
  return (
    <MenuDropDown className='user-dropdown' overlay={<UserMenu history={props.history} />} placement="bottomCenter">
      <a onClick={(e) => e.preventDefault()}>
        <BiUser style={{fontSize: '22px', marginTop: '1.5rem'}} />
      </a>
    </MenuDropDown>
  );
};

export default UserMenuIcon;
