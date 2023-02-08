import React from 'react';
import styled from 'styled-components';
import StageItem from './components/StageItem';


const Wrapper = styled.div`

`

const ItemWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: first baseline;
	gap: 10px;
`



const GameStage = () => {
	return (
		<Wrapper>
			<ItemWrapper>
				{Array.from({length: 50}).map((_, idx) => <StageItem key={idx} stage={idx+1}/>)}
			</ItemWrapper>
		</Wrapper>
	);
};

export default GameStage;