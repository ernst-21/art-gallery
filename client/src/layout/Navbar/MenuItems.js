import { NavLink, useHistory } from 'react-router-dom';
import auth from '../../modules/auth/api/auth-helper';
import SignoutBtn from '../../modules/auth/components/Signout';
import UserMenuIcon from './UserMenuIcon';
import { isActive } from '../../utils/navlinkStyles';
import CartIconComponent from './CartIconComponent';

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
      <li onClick={props.onClick}>
        <NavLink style={isActive(props.history, '/artworks')} to="/artworks">
          Artworks
        </NavLink>
      </li>
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
            <NavLink style={isActive(props.history, '/signin')} to="/signin">
              Sign In
            </NavLink>
          </li>
          <li onClick={props.onClick}>
            <NavLink style={isActive(props.history, '/signup')} to="/signup">
              Sign up
            </NavLink>
          </li>
        </>
      )}
      {auth.isAuthenticated() &&
      props.className === 'links-container_vertical' ? (
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
            <li onClick={props.onClick}>
              <NavLink
                style={isActive(props.history, '/user/cart/:userId')}
                to="/user/cart/:userId"
              >
              Cart
              </NavLink>
            </li>
            <li onClick={props.onClick}>
              <NavLink
                style={isActive(
                  props.history,
                  '/user/purchased/' + auth.isAuthenticated().user._id
                )}
                to={'/user/purchased/' + auth.isAuthenticated().user._id}
              >
              Purchased
              </NavLink>
            </li>
            <li onClick={props.onClick}>
              <NavLink
                style={isActive(
                  props.history,
                  '/user/payment/' + auth.isAuthenticated().user._id
                )}
                to={'/user/payment/' + auth.isAuthenticated().user._id}
              >
              Purchased
              </NavLink>
            </li>
            <li onClick={props.onClick}>
              <SignoutBtn
                onClick={() => {
                  auth.clearJWT(() => history.push('/'));
                }}
              >
              Sign out
              </SignoutBtn>
            </li>
          </>
        ) : (
          auth.isAuthenticated() && (
            <>
              <li>
                <UserMenuIcon history={props.history} />
              </li>
              <li>
                <NavLink
                  style={isActive(
                    props.history,
                    '/user/cart/' + auth.isAuthenticated().user._id
                  )}
                  to={'/user/cart/' + auth.isAuthenticated().user._id}
                >
                  <CartIconComponent />
                </NavLink>
              </li>
            </>
          )
        )}
    </ul>
  );
};

export default MenuItems;
