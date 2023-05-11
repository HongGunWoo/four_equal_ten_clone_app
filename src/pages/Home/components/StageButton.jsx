import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.button`

`;

const StageButton = () => {
  const navigate = useNavigate();

  return (
    <Btn onClick={() => navigate('/stages')}>
      Start Game!
    </Btn>
  );
};

export default StageButton;