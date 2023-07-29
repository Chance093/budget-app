function Category({ data }) {
	const list = data.map((cat) => {
		return <li key={cat.id}>{cat.categoryGroup}</li>;
	});
	return <ul>{list}</ul>;
}

export default Category;
