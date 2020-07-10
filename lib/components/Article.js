import React from 'react';
import PropTypes from 'prop-types';

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

const Article = (props) => {

	const {article, store} = props;
	const author = store.lookupAuthor(article.authorId);

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
};

Article.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	})
};

const ArticleContainer = (props, { store }) => {
	return <Article {...props} store={store} />;
}

ArticleContainer.contextTypes = {
	store: PropTypes.object
}

export default ArticleContainer;