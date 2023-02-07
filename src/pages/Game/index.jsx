import React, {useState} from 'react';
import styled from 'styled-components';
import FormulaList from './components/FormulaList';
import GameButtonBar from './components/GameButtonBar';
import OperatorList from './components/OperatorList';
import Result from './components/Result';

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;
	font-size: 50px;
`;


const formula = ['(', 1, '-', null, 2, null, '+', null, 3, ')', '*', 4, null];

const Game = () => {
	const [formulaList, setFormulaList] = useState(formula);
	const [grab, setGrab] = useState(null);
	const [clear, setClear] = useState(false);

	return (
		<Wrapper>
			<Result formulaList={formulaList} setClear={setClear} />
			<GameButtonBar formulaList={formula} setFormulaList={setFormulaList} clear={clear} />
			<FormulaList grab={grab} setGrab={setGrab} formulaList={formulaList} setFormulaList={setFormulaList} />
			<OperatorList setGrab={setGrab} formulaList={formulaList} />
		</Wrapper>
	);
};

export default Game;