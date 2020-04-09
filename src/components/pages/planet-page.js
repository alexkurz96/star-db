import React, { Component } from 'react';

import {PlanetList, PlanetDetails} from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PlanetPage extends Component {
  state = {
    selectedPlanet: null
  };

  onPlanetSelected = (selectedPlanet) => {
    this.setState({selectedPlanet});
  };

  render() {
    return (
      <ErrorBoundry>
        <Row 
          left={
            <PlanetList 
              onItemSelected={this.onPlanetSelected} 
            />
          } 
          right={
            <PlanetDetails
              itemId={this.state.selectedPlanet} 
            />
          }
        />
      </ErrorBoundry>
    );
  }
}
