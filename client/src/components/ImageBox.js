import React from 'react';

export default function ImageBox(props) {
	const { isVisible, imgFolder } = props;



	return (
		<div className="image-box">
			<div className="img-wrapper">
				<img src={imgUrl} alt="image" />

				<p className="image-box__link">{imgUrl}</p>
			</div>
		</div>
	);
}
