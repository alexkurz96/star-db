import ItemDetails from '../item-details';
import {withDataDetail, withSwapiService, withChildRecords} from '../hoc-helpers';

const renderPlanetDetails = [
	{field: "population", label:"Population"},
	{field: "rotationPeriod", label:"Rotation Period"},
	{field: "diameter", label:"Diameter"}
];

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPlanet,
		getImageUrl: swapiService.getPlanetImage
	}
};

const PlanetDetails = withSwapiService(
	withDataDetail(
		withChildRecords(ItemDetails, renderPlanetDetails)
	),
	mapMethodsToProps
);


export default PlanetDetails;