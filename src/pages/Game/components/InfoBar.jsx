import { BsList } from "react-icons/bs";
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
  height: 100%;
	justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.div`
	&:hover{
		cursor: pointer;
	}
  font-size: 0.6em;
  text-align: center;
	transition: all 100ms;
`;

const StageInfo = styled.div`
	border: 1px solid black;
  padding: 3px;
	width: fit-content;
	height: fit-content;
  font-size: 0.5em;
	&:hover{
		cursor: pointer;
	}
`;

const InfoBar = () => {
  const navigate = useNavigate();

	return (
		<Wrapper>
			<MenuButton><BsList /></MenuButton>
			<StageInfo
        onClick={() => navigate(`/stages`)}
      >
        2 / 50
      </StageInfo>
		</Wrapper>
	);
};

export default InfoBar;