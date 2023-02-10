import React from 'react';
import styled from 'styled-components';
import StageItem from './StageItem';

const ItemWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`


const Stages = () => {
	return (
		<ItemWrapper>
			{Array.from({ length: 50 }).map((_, idx) => <StageItem key={idx} stage={idx + 1} />)}
		</ItemWrapper>
	);
};

export default Stages;