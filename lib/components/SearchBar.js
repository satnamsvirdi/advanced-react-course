
import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component{
	state = {
		searchTerm: ''
	}

	doSearch = debounce(() => {
		this.props.doSearch(this.state.searchTerm)
	}, 300)

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		}, () => {
			this.doSearch();
		})
	}

	render() {
		return (
			<input 
				value={this.state.searchTerm}
				type="search"
				placeholder="Enter search term"
				onChange={this.handleChange}
			/>
		);
	}
};

export default SearchBar;