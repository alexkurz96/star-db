import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  LoginPage,
  SecretPage
} from '../pages';

import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';

import {SwapiServiceProvider} from '../swapi-service-context';
import {StarshipDetails} from '../sw-components';

export default class App extends Component {
  state = {
    swapiService: new DummySwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ?
      DummySwapiService : SwapiService;
      console.log('switched to', Service.name);

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    const {isLoggedIn} = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app container">
              <Header  onServiceChange={this.onServiceChange}/>
              <RandomPlanet />
              <Switch>
                <Route 
                  path="/"
                  render={() => <h2>Welcome To StarDB</h2>}
                  exact
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />
                  <Route 
                    path="/starships/:id" 
                    render={({match}) =>{ 
                      const {id} = match.params;
                      return <StarshipDetails itemId={id}/>;
                    }} 
                />
                <Route path="/login" render={() => (
                  <LoginPage 
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin}
                  />
                )} />
                <Route path="/secret" render={() => (<SecretPage isLoggedIn={isLoggedIn}/>)} />
                <Route render={() => <h2>404 Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}