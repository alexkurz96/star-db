import React, { Component } from 'react';

import {PersonList, PersonDetails} from '../sw-components';
import {Record} from '../item-details/item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
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
      >
        {(item) => (
          `${item.name} (${item.birthYear})`
        )}
      </PersonList>
    );
    
    const personDetails = (
      <PersonDetails
        itemId={this.state.selectedPerson} 
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </PersonDetails>
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
