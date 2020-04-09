import ItemDetails from '../item-details';
import {compose, withDataDetail, withSwapiService, withChildRecords} from '../hoc-helpers';

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

const PersonDetails = compose(
	withSwapiService(mapMethodsToProps),
	withDataDetail,
	withChildRecords(renderPersonDetails)
)(ItemDetails);

export default PersonDetails;