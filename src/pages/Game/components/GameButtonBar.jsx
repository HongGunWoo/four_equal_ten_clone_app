import { BsArrowClockwise, BsQuestionCircle, BsArrowRight } from "react-icons/bs";
import React from 'react';
import styled from "styled-components";

const IconWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 30px;
`

const IconBox = styled.div`
	font-size: 30px;
	align-self: center;
	cursor: pointer;
`

const GameButtonBar = ({formulaList, setFormulaList, clear}) => {

	return (
		<IconWrapper>
			<IconBox><BsQuestionCircle /></IconBox>
			<IconBox
				style={{ fontSize: "50px", height: "50px" }}
			>
					{clear ? <BsArrowRight /> : null}
			</IconBox>
			
			<IconBox 
				onClick={() => {setFormulaList(formulaList)}}
				style={{ transform: "rotate(50deg)" }}
			><BsArrowClockwise /></IconBox>
		</IconWrapper>
	);
};

export default GameButtonBar;