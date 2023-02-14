import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../../firebase';

const Wrapper = styled.div`
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LoginButton = styled.button`

`;

const LoginBar = () => {
  const [userData, setUserData] = useState(null);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
        console.log(userData)
      })
      .catch((err) => {
        console.log(err);
      })
  }

	return (
		<Wrapper>
			<LoginButton onClick={handleGoogleLogin}>Google</LoginButton>
			<LoginButton>Guest</LoginButton>
		</Wrapper>
	);
};

export default LoginBar;