import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ItemButton = styled.li`
	border: 1px solid black;
	width: 90px;
	height: 90px;
	text-align: center;
	line-height: 90px;
	&:hover{
		cursor: pointer;
	}
`

const StageItem = ({stage}) => {
	const navigate = useNavigate();

	return (
		<ItemButton onClick={() => navigate(`/stages/${stage}`)}>{stage}</ItemButton>
	);
};

export default StageItem;