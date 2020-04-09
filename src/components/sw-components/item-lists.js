import React from 'react';
import ItemList from '../item-list';
import {compose, withData, withChildFunction, withSwapiService} from '../hoc-helpers';

const renderBirthYearAndName = ({name, birthYear}) => <span>{name} ({birthYear})</span>;
const renderLengthAndName = ({name, model}) => <span>{name} ({model})</span>;
const renderDiameterAndName = ({name, diameter}) => <span>{name} ({diameter})</span>;

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

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderBirthYearAndName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetsMethodsToProps),
  withData,
  withChildFunction(renderDiameterAndName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipsMethodsToProps),
  withData,
  withChildFunction(renderLengthAndName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};