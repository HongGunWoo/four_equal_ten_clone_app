import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LoginButton = styled.button`

`;

const LoginBar = () => {
	return (
		<Wrapper>
			<LoginButton>Google</LoginButton>
			<LoginButton>Guest</LoginButton>
		</Wrapper>
	);
};

export default LoginBar;