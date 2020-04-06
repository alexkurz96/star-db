import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';

import {SwapiServiceProvider} from '../swapi-service-context';

export default class App extends Component {
  swapiService = new SwapiService();
  
  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {


    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
      
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app container">
            <Header />
            { planet }

            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
              <ErrorButton />
            </div>

            <PeoplePage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}