import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './layout/Content/Home/Home';
import Signin from './modules/auth/components/Signin';
import Signup from './modules/user/components/Signup';
import PrivateRoute from './modules/auth/components/PrivateRoute';
import ResetPassword from './modules/auth/components/ResetPassword';
import EmailRequest from './modules/auth/components/EmailRequest';
import InfoSuccess from './modules/user/components/InfoSuccess';
import InfoError from './components/InfoError';
import InfoPayment from './components/InfoPayment';
import PageNotFound from './components/PageNotFound';
import SpinLoader from './components/SpinLoader';

const ArtworkPage = React.lazy(() => import('./modules/artworks/pages/ArtworkPage'));
const Artworks = React.lazy(() => import('./layout/Content/Artworks/Artworks'));
const Artists = React.lazy(() => import('./layout/Content/Artists/Artists'));
const Galleries = React.lazy(() => import('./layout/Content/Galleries/Galleries'));
const ArtistProfile = React.lazy(() => import('./modules/artists/pages/ArtistProfile'));
const StoriesPage = React.lazy(() => import('./modules/artworks/pages/StoriesPage'));
const CartPage = React.lazy(() => import('./layout/Content/Cart/CartPage'));
const Purchased = React.lazy(() => import('./layout/Content/Purchased/PurchasedPage'));
const Profile = React.lazy(() => import('./modules/user/pages/Profile'));
const EditProfile = React.lazy(() => import('./modules/user/components/EditProfile'));

const MainRouter = () => {
  return (
    <div className="site-layout-background">
      <Suspense fallback={<SpinLoader/>}>
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
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Suspense>

    </div>
  );
};

export default MainRouter;
