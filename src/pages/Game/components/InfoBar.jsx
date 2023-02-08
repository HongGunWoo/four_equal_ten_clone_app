import { BsList } from "react-icons/bs";
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding: 30px;
`;

const MenuButton = styled.div`
	&:hover{
		cursor: pointer;
	}
`;

const StageInfo = styled.div`
	border: 1px solid black;
	width: 10px;
	height: 10px;
	&:hover{
		cursor: pointer;
	}
`;

const InfoBar = () => {
	return (
		<Wrapper>
			<MenuButton><BsList /></MenuButton>
			<StageInfo />
		</Wrapper>
	);
};

export default InfoBar;