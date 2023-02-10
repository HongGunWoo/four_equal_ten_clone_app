import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 60vh;
`;

const BannerWord = styled.h1`

`;

const Banner = () => {
	return (
		<Wrapper>
			<BannerWord>4 = 10</BannerWord>
			<BannerWord>Clone</BannerWord>
		</Wrapper>
	);
};

export default Banner;