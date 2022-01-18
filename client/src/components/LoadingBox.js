import React from 'react';

export default function LoadingBox(props) {
	const { isLoading } = props;

	return (
		<div
			className={`loading-box ${isLoading ? 'loading-box--visible' : ''}`}
		></div>
	);
}
