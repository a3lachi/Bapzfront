import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { mobile } from '../responsive';
import {Proxy} from './constants'


const Smta = styled.div`
  position: absolute;
  width: 100%;
  top:87.3%;
`

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: relative;

  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Text = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 3%;
    display: flex;
    font-weight: 600;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    text-align:center;
    opacity: 0;
    z-index:2
`;

const Container = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 440px;
  ${mobile({ minWidth: "100%"})}
  height: 350px;
  display: flex;
  z-index:5;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  position: relative;
  &:hover ${Text}{
    opacity: 1;
    z-index:2
  }
  &:hover ${Info}{
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 75%;
  z-index: 1;
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    transform: scale(1.25);
    z-index:5
  }
`;

const styleLink = {
  textDecoration: "none",
  color: "#874800" ,    
}

const ProductSmall = ({id,item,cat}) => {

  const ara = (ch) => {
    return item[1].length>1 ? item[1][ch] : item[1][0] 
  }


  
  const onMe = (event,payload) => { 
    const aydi = event.target.id
    const elems = document.getElementById('brr') 
    elems.childNodes.forEach((elem)=>{
      if (elem.id === aydi) {
        if (payload==='leave')
          elem.childNodes[1].src=ara(1)
        else 
          elem.childNodes[1].src=ara(0)
      }
    })
  }
  return (
      <Container id={id}  onMouseEnter={(e)=> onMe(e,'leave') } onMouseLeave={(e) => { onMe(e,'rr') } }   >
          <Text id={id} >{item[0]}</Text>
          <Image id={id} src ={ara(0)} />
          <Smta id={id}>
            <Info id={id}>
                <Link id={id} style={styleLink} to={ cat ? '/apparel/'+cat + "/" +item[0]+'/'+item[2]  : '/apparel/prd/' +item[0]+'/'+item[2] }>
                  <Icon id={id}> 
                  </Icon>
                </Link>
                
                <Icon id={id}>
                      
                    
                </Icon>
                
            </Info> 
          </Smta>  
          
      </Container>
      
  )
}

export default ProductSmall ;
