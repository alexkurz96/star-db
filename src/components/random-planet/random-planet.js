import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {PlanetDetails} from '../sw-components';

import './random-planet.css';

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };
  // static propTypes = {
  //   updateInterval: (props, propName, componentName) => {
  //     const value = props[propName];

  //     if (typeof value === 'number' && !isNaN(value)) {
  //       return null;
  //     }

  //     return new TypeError(`${componentName}: ${propName} must be number`);
  //   }
  // }

  state = {
    idPlanet: 1
  };

  componentDidMount() {
    const {updateInterval} = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15 + 2);
    this.setState({idPlanet: id});
  };

  render() {
    
    return (
      <PlanetDetails
              itemId={this.state.idPlanet}
              classNames={'random-planet card'}
            />
    );
  }
}
