import React from 'react';
import styled from 'styled-components';

const OperatorWrapper = styled.ul`
	display: flex;
`;

const OperatorBox = styled.li`
	text-align: center;
	font-size: 1em;
	/* margin: 0 3px; */
	height: 50px;
	width: 50px;
	line-height: 47px;
	&:hover{
		opacity: 0.5;
		cursor: pointer;
		font-size: 1.1em;
		transition: font-size 100ms;
	};
	opacity: ${props => props.draggable ? 1 : 0.5};
	:not(:last-child) {
		margin-right: 25px;
	}
	&.grabbing{
		opacity: 0.5;
	}
`;

const operators = ['(', '+', '-', '*', '/', ')']

const OperatorList = ({ setGrab, formulaList}) => {
	const dragStartHandler = e => {
		setGrab(e.target);
		e.target.classList.add("grabbing");
	}
	
	const dragEndHandler = e => {
		e.target.classList.remove("grabbing");
		setGrab(null);
	}
	const checkBracket = (operator) => {
		if (operator === '(' && formulaList.includes(operator)) return false;
		if (operator === ')' && formulaList.includes(operator)) return false;
		return true;
	}
	return (
		<OperatorWrapper>
				{operators.map((operator, idx) => (
					<OperatorBox
						draggable={checkBracket(operator)}
						key={idx}
						data-type="operator"
						data-position={idx}
						onDragStart={dragStartHandler}
						onDragEnd={dragEndHandler}
					>
						{operator}
					</OperatorBox>
				))}
			</OperatorWrapper>
	);
};

export default OperatorList;