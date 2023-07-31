function Category({ data }) {
	return (
		<div className='category-section'>
			{data.map((cat) => {
				return (
					<ul className='category-groups' key={cat.id}>
						<li className='category-header' key={cat.id}>
							{cat.categoryGroup}
						</li>
						{cat.categories.map((blah) => {
							return (
								<li className='category' key={blah.id}>
									{blah.title}
								</li>
							);
						})}
					</ul>
				);
			})}
		</div>
	);
}

export default Category;
