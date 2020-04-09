import ItemDetails from '../item-details';
import {compose, withDataDetail, withSwapiService, withChildRecords} from '../hoc-helpers';

const renderStarshipDetails = [
	{field: "model", label:"Model"},
	{field: "length", label:"Length"},
	{field: "costInCredits", label:"Cost In Credits"}
];

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getStarship,
		getImageUrl: swapiService.getStarshipImage
	}
};

const StarshipDetails = compose(
	withSwapiService(mapMethodsToProps),
	withDataDetail,
	withChildRecords(renderStarshipDetails)
)(ItemDetails);

export default StarshipDetails;