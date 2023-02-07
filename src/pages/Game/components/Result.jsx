import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const ResultBox = styled.div`
`;

const Result = ({formulaList, setClear}) => {
	const [result, setResult] = useState('?');

	const prec = (op) => {
		switch(op) {
			case '(': case')':
				return 0;
			case '+': case '-':
				return 1;
			case '*': case '/':
				return 2;
			default:
				return 999;
		}
	}
	
	const infixToPostfix = useCallback(() => {
		let stack = [];
		let convert = [];
		let temp = "";

		for(let i = 0; i < formulaList.length; i++) {
			if(formulaList[i] === null) continue;
			const char = formulaList[i].toString();

			switch(char) {
				case '(':
					stack.push(char);
					break;

				case '+' : case '-' : case '*' : case '/' :
					while(stack[stack.length - 1] != null && (prec(char) <= prec(stack[stack.length - 1]))) {
						temp += stack.pop();
						if(isNaN(stack[stack.length-1])) {
							convert.push(temp);
							temp = "";
						}
					}
					stack.push(char);
					break;
					
				case ')':
					let returned_op = stack.pop();
					while(returned_op !== '(') {
						temp += returned_op;
						returned_op = stack.pop();
						if(isNaN(stack[stack.length - 1])) {
							convert.push(temp);
							temp = ""
						}
					}
					break;
				
				default:
					temp += char;
					convert.push(temp);
					temp = ""
					break;
			}
		}

		while(stack.length !== 0){
			convert.push(stack.pop());
		}
		
		for(let i in convert) {
			if(!isNaN(convert[i])) {
				stack.push(convert[i])
			}
			else {
				const b = parseFloat(stack.pop());
				const a = parseFloat(stack.pop());
				switch(convert[i]) {
					case '+':
						stack.push(a+b);
						break;
					case '-':
						stack.push(a-b);
						break;
					case '*':
						stack.push(a*b);
						break;
					case '/':
						stack.push(a/b);
						break;
					default:
						break;
				}
			}
		}

		setResult(stack);
		stack[0] === 10 ? setClear(true) : setClear(false);
	}, [formulaList, setClear])

	useEffect(() => {
		if(
				(formulaList.includes('(') && !formulaList.includes(')')) ||
				(formulaList.includes(')') && !formulaList.includes('(')) ||
				([formulaList[2], formulaList[6], formulaList[10]].includes(null))
			) {
			setResult('?');
			setClear(false);
		}
		else {
			infixToPostfix();
		}

	}, [formulaList, infixToPostfix, setClear]);

	return (
		<ResultBox>
			{result}
		</ResultBox>
	);
};

export default Result;