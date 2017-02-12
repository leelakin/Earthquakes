import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AllData from './components/all_data';
import QuakeList from './components/quake_list';

//App is all the other components' parent component
class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			quakeData: null,
		}
	}

	componentWillMount() {
		this.setState({quakeData: AllData()});
	}

	render() {

		return (
			<div>
				<h1>Where <span className="not">not</span> to travel</h1>
				<QuakeList quakes={this.state.quakeData} />
			</div>
			
		);
	}
};

//render to dom
ReactDOM.render(<App/>, document.querySelector('.wrapper'));