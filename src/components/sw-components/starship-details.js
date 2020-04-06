import ItemDetails from '../item-details';
import {withDataDetail, withSwapiService, withChildRecords} from '../hoc-helpers';

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

const StarshipDetails = withSwapiService(
	withDataDetail(
		withChildRecords(ItemDetails, renderStarshipDetails)
	),
	mapMethodsToProps
);

export default StarshipDetails;