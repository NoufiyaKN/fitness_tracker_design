import React from 'react'
import styled from 'styled-components'
import TextInput from './TextInput';
import Button from './Button'

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800px;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

function SignUp() {
  return (
    <>
        <Container>
            <div>
                <Title>Welcome to Fittrack <i style={{color: '#f7de5e'}} className="fa-solid fa-hand"></i></Title>
                <Span>Please login with your details here!!!</Span>
            </div>
            <div style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column"
            }}>
                <TextInput label="Username" placeholder="Enter your full name"/>
                <TextInput label="Email Address" placeholder="Enter your email address"/>
                <TextInput label="Password" placeholder="Enter your password" password/>
                <Button text="SignUp"/>
            </div>
        </Container>
    </>
  )
}

export default SignUp