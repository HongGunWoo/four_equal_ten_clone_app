import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const FormulaWrapper = styled.ul`
	display: flex;
`;

const sizeUp = keyframes`
	/* from{
		width: 50px;
	}
	to{
		width: 55px
	} */
	0% {width: 50px}
	25% {width: 53px}
  50% {width: 55px}
  75% {width: 53px}
	100% {width: 55px}
`

const sizeDown = keyframes`
  0% {width: 55px}
	25% {width: 53px}
  50% {width: 51px}
  75% {width: 52px}
	100% {width: 50px}
`

const activeBox = keyframes`
  from{
    width: 50px;
  }
  to{
    width: 50px;
  }
`

const FormulaBox = styled.li`
	text-align: center;
	margin: 0px 2px;
	height: 50px;
  width: 0px;
	font-size: 1em;
	line-height: 47px;
  transition: width 200ms;

	animation-duration: 100ms;
	animation-timing-function: linear;
	animation-fill-mode: forwards;
	

	&:hover{
		opacity: 0.5;
		cursor: pointer;
		font-size: 1.1em;
    transition: font-size width 200ms;
	};

	&.over {
		/* 드래그 요소가 다른 요소에 겹친 경우 */

		/* 피연산자인 경우 */
		${props =>
    props.grab &&
    Number.isInteger(parseInt(props.grab.textContent)) &&
    Number.isInteger(parseInt(props.children)) &&
    css`
        width: 55px;
			`
  }

		/* 사칙 연산자인 경우 */
		${props =>
    props.grab &&
    ['+', '-', '*', '/'].includes(props.grab.textContent) &&
    [2, 6, 10].includes(props['data-position']) &&
    css`
      width: 55px;
      `
  }
	}

	

	${props =>
    // 피연산자와 연산자가 존재하는 칸만 크기 설정
    props.children !== null &&
    css`
      width: 50px;
		`
  };

	${props =>
    // 사칙 연산자를 드래그하는 경우 사칙 연잔자 칸 크기 및 배경 설정
    !props.children &&
    props.grab &&
    ['+', '-', '*', '/'].includes(props.grab.textContent) &&
    [2, 6, 10].includes(props['data-position']) &&
    css`
    background-color: #ebebeb;
    /* transition: padding 100ms 0ms; */
    /* padding: 0 20px; */
    /* transition: width 100ms 0ms; */
    width: 50px;
    /* transform: scaleX(50); */
		`
  }

	${props =>
    // 피연산자를 드래그하는 경우
    props.grab &&
    Number.isInteger(parseInt(props.grab.textContent)) &&
    Number.isInteger(parseInt(props.children)) &&
    parseInt(props.grab.dataset.position) !== parseInt(props['data-position']) &&
    css`
			background-color: #ebebeb;
		`
  };

	/* 괄호를 드래그하는 경우 */
	${props => {
    if (
      props.grab &&
      props.grab.textContent === '(' &&
      !props.children &&
      [0, 3, 7].includes(props['data-position']) &&
      props['data-position'] < (props.RBposition === -1 ? 999 : props.RBposition) - 4 &&
      props.RBposition - props['data-position'] !== 12
    ) {
      return css`
        background-color: #ebebeb;
        transition: padding 100ms 0ms;
        padding: 0 20px;
      `
    }

    if (
      props.grab &&
      props.grab.textContent === ')' &&
      !props.children &&
      [5, 9, 12].includes(props['data-position']) &&
      props['data-position'] >= (props.LBposition === -1 ? -999 : props.LBposition) + 4 &&
      props.LBposition - props['data-position'] !== -12
    ) {
      return css`
        background-color: #ebebeb;
        transition: padding 100ms 0ms;
        padding: 0 20px;
      `
    }
  }
  }
`;

const FormulaList = ({ grab, setGrab, formulaList, setFormulaList }) => {
  const [delOper, setDelOper] = useState(false);

  if (!formulaList) return;

  const dragStartHandler = e => {
    //빈 요소(null)일 경우 방지
    if (e.target.textContent === '') {
      e.preventDefault();
      return;
    }
    setGrab(e.target);
  }

  const dragEndHandler = e => {
    //드래그한 객체가 연산자인데 밖으로 드래그할 경우 삭제
    if (delOper && typeof formulaList[grab.dataset.position] === 'string') {
      let _list = [...formulaList];
      _list[grab.dataset.position] = null;
      setFormulaList(_list);
    }
    setGrab(null);
  }

  const dropHandler = e => {
    let grabPosition = Number(grab.dataset.position);
    let targetPosition = Number(e.target.dataset.position);

    // 괄호 연산자와 사칙 연산자 사이의 교환 방지
    if (['+', '-', '*', '/'].includes(grab.textContent) && ['(', ')'].includes(e.target.textContent)) return;
    if (['(', ')'].includes(grab.textContent) && ['+', '-', '*', '/'].includes(e.target.textContent)) return;

    // 사칙 연산자인 경우 조건
    if (['+', '-', '*', '/'].includes(grab.textContent)) {
      if (![2, 6, 10].includes(targetPosition)) return;
    }

    // 숫자일 경우 조건
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(Number.parseInt(grab.textContent))) {
      if (![1, 4, 8, 11].includes(targetPosition)) return;
    }

    // 왼쪽 괄호일 경우 조건
    if (grab.textContent === '(') {
      if (![0, 3, 7].includes(targetPosition)) return;
      if (formulaList.includes(')')) {
        if (targetPosition >= formulaList.indexOf(')') - 4) return;
        if (formulaList.indexOf(')') === 12 && targetPosition === 0) return;
      }
    }

    // 오른쪽 괄호일 경우 조건
    if (grab.textContent === ')') {
      if (![5, 9, 12].includes(targetPosition)) return;
      if (formulaList.includes('(')) {
        if (targetPosition < formulaList.indexOf('(') + 4) return;
        if (formulaList.indexOf('(') === 0 && targetPosition === 12) return;
      }
    }

    let _list = [...formulaList];
    if (grab.dataset.type === "formula") {
      [_list[grabPosition], _list[targetPosition]] = [_list[targetPosition], _list[grabPosition]];
    }
    else {
      _list[targetPosition] = grab.textContent;
    }
    setFormulaList(_list);
  }

  const dragOverHandler = e => {
    e.preventDefault();
    if (e.target.dataset.type === "formula") {
      if (typeof formulaList[grab.dataset.position] === 'string') {
        setDelOper(false);
      }
    }
  }

  const dragEnterHandler = e => {
    e.target.classList.add("over");
    if (e.target.dataset.type === "formula") {
      if (typeof formulaList[grab.dataset.position] === 'string') {
        setDelOper(false);
      }
    }
  }

  const dragLeaveHandler = e => {
    e.target.classList.remove("over");
    if (e.target.dataset.type === "formula") {
      if (typeof formulaList[grab.dataset.position] === 'string') {
        setDelOper(true);
      }
    }
  }

  return (
    <FormulaWrapper>
      {formulaList.map((item, idx) => (
        <FormulaBox
          draggable
          key={idx}
          data-type="formula"
          data-position={idx}
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          grab={grab}
          LBposition={formulaList.indexOf('(')}
          RBposition={formulaList.indexOf(')')}
        >
          {item}
        </FormulaBox>
      ))}
    </FormulaWrapper>
  );
};

export default FormulaList;