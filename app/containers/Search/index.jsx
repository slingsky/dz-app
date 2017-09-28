import React from 'react';

import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

class Search extends React.Component {
	render() {
		const params = this.props.params;
		return (
			<div>
				<SearchHeader keyword={params.keyword} type={params.type} />
				<SearchList type={params.type} keyword={params.keyword} />
			</div>
		)
	}
}

export default Search;