import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
	article: {
		paddingBottom: 10,
		borderBottomStyle: 'solid',
		borderColor: '#aaa',
		borderBottomWidth: 1,
		marginBottom: 10
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingBottom: 5
	},
	date: {
		fontSize: '0.8em',
		color: '#888',
	},
	author: {
		textTransform: 'uppercase',
		textDecoration: 'none',
		color: '#008',
		paddingTop: 10,
		paddingBottom: 10,
	},
	body:{
		paddingTop: 10,
		paddingLeft: 15,
		paddingBottom: 15,
	},
}

const dateDisplay = (dateString) =>	new Date(dateString).toDateString();

class Article extends React.PureComponent {
	render() {
		const {article, author} = this.props;

	return (
		<div style={styles.article}>
			<div style={styles.title}>{article.title}</div>
			<div style={styles.date}>
				{dateDisplay(article.date)}
			</div>
			<div style={styles.author}>
				<a href={author.website}>{author.firstName} {author.lastName}</a>
			</div>
			<div style={styles.body}>{article.body}</div>
		</div>
	);
	}
}


Article.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	})
};

function extraProps(store, originalProps) {
	return {
		author: store.lookupAuthor(originalProps.article.authorId)
	}
}

export default storeProvider(extraProps)(Article);