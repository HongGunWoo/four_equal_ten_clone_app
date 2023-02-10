import React from 'react';
import styled from 'styled-components';
import Stages from './components/Stages';


const Wrapper = styled.div`
	/* width: 100%;
	justify-content: center;
	align-items: center; */
`

const GameStage = () => {
	return (
		<Wrapper>
			<Stages />
		</Wrapper>
	);
};

export default GameStage;