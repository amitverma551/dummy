import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import NavbarContainer from './containers/Header';
import Footer from './components/Footer';

const Loading = () => <div style={{height: '1000px'}}></div>;

const Home = Loadable({
    loader: () => import('./containers/Home'),
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

const Router = ()=>{
    return(
    <Fragment>
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/beauty" component={Beauty} />
            <Route path="/celebrity" component={Celebrity} />
        </Switch>
        <Footer /> 
    </Fragment>
  )
}

export default Router;