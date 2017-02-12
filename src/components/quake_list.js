import React from 'react';
import QuakeBox from './quake_box';

const QuakeList = (props) => {

		const quakes = props.quakes;

//sort algorithm for objects in array by http://jsfiddle.net/gfullam/sq9U7/
		const by = function (path, reverse, primer, then) {
		    const get = function (obj, path) {
		            if (path) {
		                path = path.split('.');
		                for (var i = 0, len = path.length - 1; i < len; i++) {
		                    obj = obj[path[i]];
		                };
		                return obj[path[len]];
		            }
		            return obj;
		        },
		        prime = function (obj) {
		            return primer ? primer(get(obj, path)) : get(obj, path);
		        };
		    
		    return function (a, b) {
		        let A = prime(a),
		            B = prime(b);
		        
		        return (
		            (A < B) ? -1 :
		            (A > B) ?  1 :
		            (typeof then === 'function') ? then(a, b) : 0
		        ) * [1,-1][+!!reverse];
		    };
		};

		quakes.sort(by('properties.mag', true));

		const quakeBoxes = quakes.map((quake) => {
			return <QuakeBox key={quake.id} quake={quake} />;
		});

		return (	
			<div className="quakelist">
				{quakeBoxes}
			</div>
		);


	
};

export default QuakeList;