import React, { useState } from 'react';
import Footer from './Footer';
import UploadBox from './UploadBox';
import LoadingBox from './LoadingBox';

export default function App() {
	const [isLoading, setIsLoading] = React.useState(false);

	const setLoading = (value) => {
		setIsLoading(value);
	};

	return (
		<div className="wrapper">
			<UploadBox setLoading={setLoading} />
			<Footer />
			<LoadingBox isLoading={isLoading} />
		</div>
	);
}
