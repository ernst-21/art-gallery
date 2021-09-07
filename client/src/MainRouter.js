import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './layout/Content/Home/Home';
import Artworks from './layout/Content/Artworks/Artworks';
import Artists from './layout/Content/Artists/Artists';
import Galleries from './layout/Content/Galleries/Galleries';
import Signup from './modules/user/Signup';
import Signin from './modules/auth/Signin';
import EditProfile from './modules/user/EditProfile';
import Profile from './modules/user/Profile';
import PrivateRoute from './modules/auth/PrivateRoute';
import ResetPassword from './modules/auth/ResetPassword';
import EmailRequest from './modules/auth/EmailRequest';
import InfoSuccess from './modules/user/InfoSuccess';
import InfoError from './components/InfoError';
import ArtistProfile from './modules/artists/ArtistProfile';
import ArtworkPage from './modules/artworks/pages/ArtworkPage';
import StoriesPage from './modules/artworks/pages/StoriesPage';

const MainRouter = () => {
  return (
    <div className="site-layout-background">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists" component={Artists} />
        <Route path="/artworks" component={Artworks} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/reset/edit/:token" component={ResetPassword} />
        <Route path="/email" component={EmailRequest} />
        <Route path="/info" component={InfoSuccess} />
        <Route path="/info-network-error" component={InfoError} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />
        <Route path="/artists/:artistId" component={ArtistProfile} />
        <Route path="/artworks/:artworkId" component={ArtworkPage} />
        <Route exact path="/artwork/carousel/stories" component={StoriesPage} />
      </Switch>
    </div>
  );
};

export default MainRouter;
