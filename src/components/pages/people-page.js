import React, {Component} from 'react';

import {PersonList, PersonDetails} from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    return (
      <ErrorBoundry>
        <Row 
          left={
            <PersonList 
              onItemSelected={this.onPersonSelected} 
            />
          } 
          right={
            <PersonDetails
              itemId={this.state.selectedPerson} 
            />
          }
        />
      </ErrorBoundry>
    );
  }
}
