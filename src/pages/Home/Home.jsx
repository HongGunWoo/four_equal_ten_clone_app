import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner';
import LoginBar from './components/LoginBar';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Home = () => {
	return (
		<Wrapper>
			<Banner />
			<LoginBar />
		</Wrapper>
		
	);
};

export default Home;