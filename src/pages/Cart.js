import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import { useSelector } from "react-redux";
import { useState } from 'react'

import styled from "styled-components"
import { mobile } from '../responsive';

import RemoveCircleOutlineIcon  from '@mui/icons-material/RemoveCircleOutline';

import { store } from '../redux/store'
import {  delCart  , updateQtty } from '../redux/cartSlice';
import { Navigate } from 'react-router-dom';
 


const Container = styled.div`
    padding-top:30px;
    padding-bottom:30px;
    position: relative;
    width:100%;
    align-items: center;
    display:flex;
    flex-direction:column;
    ${mobile({flexDirection:"column" })}
`
const Total = styled.div`
    text-align: center;
    margin-right:auto;
    padding : 10px 10px 10px 10px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

const Buttn = styled.button`
    padding : 5px 10px 5px 10px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

`
const Wrapper = styled.div`
    
    position: relative;
    width:100%;
    align-items: center;
    display:flex;
    flex-direction:column;
    
`

const CartProd = styled.div`
    display:flex;
    flex-direction:row;
    position:relative;
    ${mobile({flexDirection:"column" })}
    
    width:50vw;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    margin-bottom:20px;
    
    
    ${mobile({ textAlign: "center" })}
`

const CartPro = styled.div`
    display:flex;
    flex-direction:row;
    ${mobile({flexDirection:"column" , paddingBottom:"20px" })}
    width:50vw;
    padding:20px 20px 20px 20px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    margin-bottom:20px;
    
    
    ${mobile({ textAlign: "center" })}
`
const Mage = styled.div`
    display:"inline-block" ;
    width:300px;
`
const Image = styled.img`
    height:200px;
    margin-left:20px;

    ${mobile({display:"inline-block" , marginLeft:"0"})}
`

const Del = styled.div`
    display:"inline-block" ;
    width:300px;
    
`
const styleDel = {
    color:"red",
    zIndex:5,
}

const Br = styled.div`
    display: inline-block;
    position:absolute;
    right:10px;
    top: 10px;
    
`

const Info = styled.div`
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:20px;
    text-align: start;
    display:flex;
    flex-direction:column;
    ${mobile({paddingTop:"0px" })}
`


const Name = styled.div`
    font-size:30px;    
    line-height: 1;
`


const Color = styled.div`
    margin-top:20px;
    display:flex;

` 
const Ler = styled.div`
    padding:1px 10px 1px 10px; 
    outline-style: solid;
    outline-width:1px;
` 



const Price = styled.div`
    margin-top:20px;
    display:flex;
`

const Qtti = styled.div`
    margin-top:10px;
    display:flex;
`

const Containerrr = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Cart = () => {
    var products = useSelector((state) =>  state.cart.itms) 

    const [ chkout , setChkout ] = useState(false)


    const tots = () => {
        var tot = 0 ;
        products?.forEach((elem)=>(tot+=Number(elem.price.split('$')[1])*Number(elem.quantity)))
        return tot;
    }

    const removeItem = (event) => {
        const aydi = Number(event.target.parentElement.id)
        store.dispatch(updateQtty(aydi))
    }

    return (
        <Containerrr>
            <Announcement />
            <Navbar  />
            <Categories />
            <button onClick={(e)=> store.dispatch(delCart())}>CLEAR</button>
            <Container key="rtret">
                
                <Wrapper key="idx" id='wrapp'>
            {!chkout && products ? products.map((item,idx) => ( 
                <CartProd key={"rr"+idx} id={'rr'+idx.toString()}  >

                    <Mage ><Image key={idx} src={item?.src} ></Image></Mage>

                    <Info key={idx} >
                    <Name key={idx} >{item.productname}</Name>
                    <Color><Ler> {item.color} </Ler> </Color>
                    <Price>{item.price}</Price>
                    <Qtti><b>Quantity : <span>{item.quantity}</span></b></Qtti>
                    <Qtti><b>Size : <span>{item.size}</span></b></Qtti>

                    </Info>
                    <Del  id={idx} onClick={removeItem} >< Br id={idx}  ><RemoveCircleOutlineIcon id={idx} style={styleDel} ></RemoveCircleOutlineIcon></Br></Del>


                </CartProd>

                
    
                )) : <></>
            }

            {!chkout && ( products?.length>0 ? <CartPro><Total><b>TOTAL:</b> US${tots()}</Total><Buttn onClick={(e)=>setChkout(true)}>CHECKOUT</Buttn></CartPro> : 
            <><div style={{marginBottom:"20px"}} ><b>YOUR BAG</b></div><div>Your bag currently is empty.</div></>)}
            { chkout &&  <Navigate to="/checkout"  />  }
            </Wrapper>
            </Container>
            
            
            <Footer />
        </Containerrr>
    )

}

export default Cart ;