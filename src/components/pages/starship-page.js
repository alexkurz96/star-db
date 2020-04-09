import React, {Component} from 'react';

import {StarshipList, StarshipDetails} from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class StarshipPage extends Component {
  state = {
    selectedStarship: null
  };

  onStarshipSelected = (selectedStarship) => {
    this.setState({selectedStarship});
  };

  render() {
    return (
      <ErrorBoundry>
        <Row 
          left={
            <StarshipList 
              onItemSelected={this.onStarshipSelected} 
            />
          } 
          right={
            <StarshipDetails
              itemId={this.state.selectedStarship} 
            />
          }
        />
      </ErrorBoundry>
    );
  }
}
