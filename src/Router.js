import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import NavbarContainer from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

const Loading = () => <div style={{height: '1000px'}}></div>;

const Home = Loadable({
    loader: () => import('./components/Home'),
    loading: Loading
  });

  const Beauty = Loadable({
    loader: () => import('./containers/Beauty'),
    loading: Loading
  });
  
  const Celebrity = Loadable({
    loader: () => import('./containers/Celebrity'),
    loading: Loading
  });

  const Fashion = Loadable({
    loader: () => import('./containers/Fashion'),
    loading: Loading
  });

  const Life = Loadable({
    loader: () => import('./containers/Life'),
    loading: Loading
  });

  const Relationships = Loadable({
    loader: () => import('./containers/Relationships'),
    loading: Loading
  });

  const searchResult = Loadable({
    loader: () => import('./containers/searchResult'),
    loading: Loading
  });

  const DetailPage = Loadable({
    loader: () => import('./containers/DetailPage'),
    loading: Loading
  });
 

const Router = () => {
    return(
      <Fragment>
          <NavbarContainer />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/beauty" component={Beauty} />
              <Route exact path="/celebrity" component={Celebrity} />
              <Route exact path="/fashion" component={Fashion} />
              <Route exact path="/life" component={Life} />
              <Route exact path="/relationships" component={Relationships} />
              <Route exact path="/search" component={searchResult} />
              <Route path="/beauty/*" component={DetailPage} />
              <Route path="/celebrity/*" component={DetailPage} />
              <Route path="/fashion/*" component={DetailPage} />
              <Route path="/life/*" component={DetailPage} />
              <Route path="/relationships/*" component={DetailPage} />
              <Route component={PageNotFound} /> 
          </Switch>
          <Footer /> 
      </Fragment>
    )
}

export default Router;