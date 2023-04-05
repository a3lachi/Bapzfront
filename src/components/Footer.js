import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import {Link} from 'react-router-dom';

import {Local} from './constants'



const Container = styled.div`
    padding-bottom:30px;
    padding-left:30px;
    padding-right:20px;
    opacity: 0.9;
    margin-top: auto;
    display: flex;
    background-color: #874800;
    color:white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    ${mobile({ flexDirection: "column" })}
`;


const Left = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px;
    
`;


const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ alignItems: "center", justifyContent:"center" })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Logos= styled.img`
    width:90px;
    display: inline-block;
   
    ${mobile({ fontSize: "22px", whiteSpace: "nowrap", padding:"2px 3px"})}
`


const Footer = () => {
    return (
        <>
        <Container className='row'>
            <Left>
                <Link to='/'>
                    <Logos  src={`${Local}/bapelogo.svg`} />
                </Link>
                <Desc>
                © 2023 BAPE Hong Kong Limited
                </Desc>
                <SocialContainer>
                    <SocialIcon color="none">
                    <img width={20} src={process.env.PUBLIC_URL+'/twt.svg'} />
                    </SocialIcon>
                    <SocialIcon color="none">
                        <img width={20} src={process.env.PUBLIC_URL+'/ig.svg'} />
                    </SocialIcon>
                    <SocialIcon color="none">
                    <img width={20} src={process.env.PUBLIC_URL+'/fb.svg'} />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Explore</Title>
                <List>
                    <ListItem>News</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Keep in touch</Title>
                <ContactItem>
                    <img width={25} src={process.env.PUBLIC_URL +'/mail.png'} />
                    <div style={{marginLeft:'20px'}}>contact@bapz.io</div>
                </ContactItem>
                <ContactItem>
                <img width={25} src={process.env.PUBLIC_URL +'/location.png'} />
                <div style={{marginLeft:'20px'}}>47 Michel Alien, Pont Kong, Mars</div>
                </ContactItem>
            </Right>
            
        </Container>
        </>
    )
}

export default Footer
