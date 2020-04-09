import ItemDetails from '../item-details';
import {compose, withDataDetail, withSwapiService, withChildRecords} from '../hoc-helpers';

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

const PlanetDetails = compose(
	withSwapiService(mapMethodsToProps),
	withDataDetail,
	withChildRecords(renderPlanetDetails)
)(ItemDetails);


export default PlanetDetails;