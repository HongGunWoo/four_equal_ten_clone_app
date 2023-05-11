import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner';
import LoginBar from './components/LoginBar';
import StageButton from './components/StageButton';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Home = () => {
	return (
		<Wrapper>
			<Banner />
			<StageButton />
			<LoginBar />
		</Wrapper>
	);
};

export default Home;