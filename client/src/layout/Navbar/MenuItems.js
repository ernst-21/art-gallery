import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import auth from '../../modules/auth/auth-helper';
import SignoutBtn from '../../modules/auth/Signout';
import UserMenuIcon from './UserMenuIcon';
import ArtworksMenu from './ArtworksMenu';
import {isActive} from '../../utils/navlinkStyles';

const MenuItems = (props) => {
  const history = useHistory();
  return (
    <ul className={props.className}>
      <li onClick={props.onClick}>
        <NavLink
          style={isActive(props.history, '/')}
          onClick={props.onClick}
          to="/"
        >
          Home
        </NavLink>
      </li>
      {props.className === 'links-container_vertical' ? (<li onClick={props.onClick}>
        <NavLink
          style={isActive(props.history, '/artworks')} to="/artworks"
        >
          Artworks
        </NavLink>
      </li>) : (<li><ArtworksMenu history={props.history} /></li>)}
      <li onClick={props.onClick}>
        <NavLink
          style={isActive(props.history, '/artists')}
          onClick={props.onClick}
          to="/artists"
        >
          Artists
        </NavLink>
      </li>
      <li onClick={props.onClick}>
        <NavLink
          style={isActive(props.history, '/galleries')}
          onClick={props.onClick}
          to="/galleries"
        >
          Galleries
        </NavLink>
      </li>
      {!auth.isAuthenticated() && (
        <>
          <li onClick={props.onClick}>
            <NavLink
              style={isActive(props.history, '/signin')} to="/signin"
            >
              Sign In
            </NavLink>
          </li>
          <li onClick={props.onClick}>
            <NavLink
              style={isActive(props.history, '/signup')} to="/signup"
            >
              Sign up
            </NavLink>
          </li>
        </>
      )}
      {auth.isAuthenticated() && props.className === 'links-container_vertical' ? (
        <>
          <li onClick={props.onClick}>
            <NavLink
              style={isActive(
                props.history,
                '/user/' + auth.isAuthenticated().user._id
              )}
              to={'/user/' + auth.isAuthenticated().user._id}
            >
              My Profile
            </NavLink>
          </li>
          <SignoutBtn
            onClick={() => {
              auth.clearJWT(() => history.push('/'));
            }}
          >
            Sign out
          </SignoutBtn>
        </>
      ) : auth.isAuthenticated() && <li><UserMenuIcon history={props.history} /></li>}
    </ul>
  );
};

export default MenuItems;
