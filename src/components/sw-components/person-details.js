import ItemDetails from '../item-details';
import {withDataDetail, withSwapiService, withChildRecords} from '../hoc-helpers';

const renderPersonDetails = [
	{field: "gender", label:"Gender"},
	{field: "birthYear", label:"Birth Year"},
	{field: "eyeColor", label:"Eye Color"}
];

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPerson,
		getImageUrl: swapiService.getPersonImage
	}
};

const PersonDetails = withSwapiService(
	withDataDetail(
		withChildRecords(ItemDetails, renderPersonDetails)
	),
	mapMethodsToProps
);

export default PersonDetails;