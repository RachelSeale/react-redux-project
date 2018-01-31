// { Component } is the same as const Component = React.Component;
const styles = require('../searchBar/search_bar.scss');
import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		//only ever inside constructor we can manipulate the state like this
		this.state = { term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				{/* only change the state with this.setState */}
				<input
				value={this.state.term}
				placeholder="Please enter some text"
				className="search-bar"
				onChange={ event => this.setState({ term: event.target.value }) }
				/>
			</div>
		);
	}
}


export default SearchBar;
