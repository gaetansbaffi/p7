import React from 'react';
import { TagsContainer, TagButton } from './Tags.elements';

const Tags = ({ tagsList, click, clickAll }) => {
	const renderTags = tagsList.map((tag) => {
		return (
			<TagButton
				className={tag.tag}
				key={tag.id}
				onClick={() => click(tag.tag)}
			>
				{tag.tag}
			</TagButton>
		);
	});

	return (
		<TagsContainer>
			<div>
				<TagButton onClick={clickAll}>Tous</TagButton>
				{renderTags}
			</div>
		</TagsContainer>
	);
};

export default Tags;
