import React from 'react';
import ItemList from '../item-list';
import {withData, withChildFunction, withSwapiService} from '../hoc-helpers';

const renderBirthYearAndName = ({name, birthYear}) => <span>{name} ({birthYear})</span>;
const renderLengthAndName = ({name, diameter}) => <span>{name} ({diameter})</span>;
const renderDiameterAndName = ({name, length}) => <span>{name} ({length})</span>;

const  mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};
const  mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};
const  mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderBirthYearAndName)
  ),
  mapPersonMethodsToProps
);
const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderDiameterAndName)
  ),
  mapPlanetsMethodsToProps
);
const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderLengthAndName)
  ),
  mapStarshipsMethodsToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList
};