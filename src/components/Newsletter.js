import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    height: 60vh;
    background-color: rgb(89,100,54,0.4);
    display: flex;
    align-items: center;
    text-align:center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ display: "none" })}
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.2)
    }
`;

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.2)
    }
    ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
    padding:0px;
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left:20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const Newsletter = () => {
    return (
        <Container className='row'>
            <Title>Newsletter</Title>
            <Desc>Be the first to know about our future drops.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <img height={30} src={process.env.PUBLIC_URL + '/send.png'} />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
