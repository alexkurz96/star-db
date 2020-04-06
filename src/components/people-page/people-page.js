import React, { Component } from 'react';

import {PersonList, PersonDetails} from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <PersonList 
        onItemSelected={this.onPersonSelected} 
      />
    );
    
    const personDetails = (
      <PersonDetails
        itemId={this.state.selectedPerson} 
      />
    );
    return (
      <ErrorBoundry>
        <Row 
          left={itemList} 
          right={personDetails}
        />
      </ErrorBoundry>
    );
  }
}
