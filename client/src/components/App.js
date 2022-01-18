import React from 'react';
import Footer from './Footer';
import UploadBox from './UploadBox';
import LoadingBox from './LoadingBox';

export default function App() {
	return (
		<div className="wrapper">
			<UploadBox />
			<Footer />
		</div>
	);
}
