import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormulaList from './components/FormulaList';
import GameButtonBar from './components/GameButtonBar';
import InfoBar from './components/InfoBar';
import OperatorList from './components/OperatorList';
import Result from './components/Result';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase';

const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	justify-content: space-evenly;
	/* padding-bottom: 300px; */
	align-items: center;
	flex-direction: column;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;
	font-size: 50px;
`;

const Game = () => {
	const { stage } = useParams();
	const [originList, setOriginList] = useState(null);
	const [formulaList, setFormulaList] = useState(null);
	const [grab, setGrab] = useState(null);
	const [clear, setClear] = useState(false);

	async function getDB() {
		const querySnapshot = await getDoc(doc(db, "stage", stage));
		console.log(querySnapshot.data());
		console.log(querySnapshot.data().question[1]);
		let _formula = [null, null, null, null, null, null, null, null, null, null, null, null, null];
		_formula[1] = parseInt(querySnapshot.data().question[0]);
		_formula[4] = parseInt(querySnapshot.data().question[1]);
		_formula[8] = parseInt(querySnapshot.data().question[2]);
		_formula[11] = parseInt(querySnapshot.data().question[3]);
		setOriginList(_formula);
		setFormulaList(_formula);
	}

	useEffect(() => {
		getDB();
	}, [stage])

	if(formulaList === null || originList === null) return;

	return (
		<Wrapper>
			<InfoBar />
			<Result formulaList={formulaList} setClear={setClear} />
			<GameButtonBar formulaList={originList} setFormulaList={setFormulaList} clear={clear} setClear={setClear} stage={stage} />
			<FormulaList grab={grab} setGrab={setGrab} formulaList={formulaList} setFormulaList={setFormulaList} />
			<OperatorList setGrab={setGrab} formulaList={formulaList} />
		</Wrapper>
	);
};

export default Game;