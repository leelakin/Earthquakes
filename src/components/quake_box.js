
import React from 'react';


const QuakeBox = (props) => {

	const place = props.quake.properties.place;
	let placeArray = place.split(' of ');

	const mag = props.quake.properties.mag;

	const warnLevel = () => {
		let scale = mag >= 5 ? "hi" : (mag >= 3 ? "med" : "lo");

		return scale;
	}

	return (
		<div className={"quakebox " + warnLevel()}>

			<div className="mag">
				magnitude
			</div>
			<div className="magno">
				{mag}
			</div>
			

			<div className="prox">
				{(placeArray.length < 2) ? null : placeArray[0] + " of"}
			</div>
			<div className="place">
				{(placeArray.length < 2) ? placeArray : placeArray[1]}
			</div>

		</div>
	);
};

export default QuakeBox;