import React from 'react';

import ItemDetails, {Record} from '../item-details';
import {withDataDetail} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const {
	getPerson,
	getPlanet,
	getStarship
} = swapiService;
const PersonDetails = withDataDetail(ItemDetails, getPerson);
const PlanetDetails = withDataDetail(ItemDetails, getPlanet);
const StarshipDetails = withDataDetail(ItemDetails, getStarship);

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
};