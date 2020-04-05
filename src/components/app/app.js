import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
// import ErrorIndicator from '../error-indicator';
// import ItemDetails, {Record} from '../item-details/item-details';
// import Row from '../row';

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
    // const perDet = (
    //   <ItemDetails
    //     itemId={11} 
    //     getData={this.swapiService.getPerson}
    //     getImageUrl={this.swapiService.getPersonImage}
    //   >
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye Color" />
    //   </ItemDetails>
    // );

    // const staDet = (
    //   <ItemDetails
    //     itemId={5} 
    //     getData={this.swapiService.getStarship}
    //     getImageUrl={this.swapiService.getStarshipImage}
    //   >
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost In Credits" />
    //   </ItemDetails>
    // );
      
    return (
      <ErrorBoundry>
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
      </ErrorBoundry>
    );
  }
}