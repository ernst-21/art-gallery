import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './layout/Content/Home/Home';
import Artworks from './layout/Content/Artworks/Artworks';
import Artists from './layout/Content/Artists/Artists';
import Galleries from './layout/Content/Galleries/Galleries';
import Signup from './modules/user/components/Signup';
import Signin from './modules/auth/components/Signin';
import EditProfile from './modules/user/components/EditProfile';
import Profile from './modules/user/pages/Profile';
import PrivateRoute from './modules/auth/components/PrivateRoute';
import ResetPassword from './modules/auth/components/ResetPassword';
import EmailRequest from './modules/auth/components/EmailRequest';
import InfoSuccess from './modules/user/components/InfoSuccess';
import InfoError from './components/InfoError';
import ArtistProfile from './modules/artists/pages/ArtistProfile';
import ArtworkPage from './modules/artworks/pages/ArtworkPage';
import StoriesPage from './modules/artworks/pages/StoriesPage';
import CartPage from './layout/Content/Cart/CartPage';
import Purchased from './layout/Content/Purchased/PurchasedPage';
import InfoPayment from './components/InfoPayment';

const MainRouter = () => {
  return (
    <div className="site-layout-background">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/artworks" component={Artworks} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/reset/edit/:token" component={ResetPassword} />
        <Route path="/email" component={EmailRequest} />
        <Route path="/info" component={InfoSuccess} />
        <Route path="/info-network-error" component={InfoError} />
        <Route path="/info-payment-success/:userId" component={InfoPayment} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route exact path="/user/:userId" component={Profile} />
        <Route path="/artists/:artistId" component={ArtistProfile} />
        <Route exact path="/artworks/:artworkId" component={ArtworkPage} />
        <Route exact path="/artwork/carousel/stories" component={StoriesPage} />
        <Route path="/user/cart/:userId" component={CartPage} />
        <Route path="/artworks/purchased/:userId" component={Purchased} />
      </Switch>
    </div>
  );
};

export default MainRouter;
