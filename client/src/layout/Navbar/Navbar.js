import MenuItems from './MenuItems';
import { withRouter } from 'react-router-dom';
import MenuButton from './MenuButton';

const Navbar = withRouter(({ history }) => (
  <nav>
    <div>
      <MenuButton history={history} />
      <div className="logo">VRTL</div>
    </div>
    <MenuItems history={history} className="links-container_horizontal" />
  </nav>
));

export default Navbar;
