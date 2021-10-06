import React from 'react';

const Head = (props) => {
	React.useEffect(() => {
		document.title = props.title + ' | Tel&Com';
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', props.descriptions || '');
	}, [props]);

	return <></>;
};

export default Head;
