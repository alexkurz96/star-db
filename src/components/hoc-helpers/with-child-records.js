import React from 'react';
import {Record} from '../item-details';

const withChildRecords = (components) => (Wrapped) => {
	const content = components.map(({field, label}) => {
		return (
			<Record field={field} label={label} key={field}/>
		)
	});
  return (props) => {
    return (
      <Wrapped {...props}>
        {content}
      </Wrapped>
    );
  };
};

export default withChildRecords;