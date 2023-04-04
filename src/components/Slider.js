import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    width:100%;
    height:100%;
    position:flex;
    margin:auto ;
    ${mobile({ paddingTop:"5px"})}
`
const Wrapper = styled.div`

    width:100%;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: all .3s ease-in-out;
    ${mobile({  marginBottom:"20px" })}
`
const Image = styled.img`
    height: 500px;
    display: flex;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.03)
    }
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    max-width:100%;
    max-height:100%;
    ${mobile({ height:"100%"  })}
    
`


const BoxOne = styled.div`
    display: flex;
    flex-direction: row;
    gap:20px;
    margin-top:40px;
    

`

const BoxTwo = styled.div`
    margin-top:40px;
    display: flex;
    flex-direction:row;
    gap:30px;
    

`



const Slider = () => {



    return (
        <Container className='row'>
            
            <Wrapper>
                <BoxOne>
                <Image style={{width:'30vw',height:'auto',flex:'0 0 auto'}} src='/images/T1-MEN-PC.jpg' />
                <Image style={{width:'30vw',height:'auto',flex:'0 0 auto'}} src='/images/T1-WOMEN-PC.jpg' />
                <Image style={{width:'30vw',height:'auto',flex:'0 0 auto'}} src='/images/T1-KIDS-PC.jpg' />
                </BoxOne>
            </Wrapper>
            
            <BoxOne>
                <Wrapper>
                    <Image style={{width:'50vw',height:'auto'}} src='images/20230316_BAPEX_S1-PC.jpg' />
                </Wrapper>
                <Wrapper>
                    <Image style={{width:'50vw',height:'100%'}} src='images/20230316_ROADSTA_S1-PC.jpg' />
                </Wrapper>
            </BoxOne>

            <Wrapper>
            <BoxTwo>
                
                    
                    <Image style={{width:'60vw',height:'auto'}} src='/IMG_8591.jpg'/>

                    <Image style={{width:'30vw',height:'auto'}} src='/IMG_0005.JPG' />
                
            </BoxTwo>
            </Wrapper>
            
        </Container>
    )
}




export default Slider ; 