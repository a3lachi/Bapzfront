import { store } from '../redux/store'
import {useDispatch} from "react-redux";
import { newUser , badUser , setJwt } from "../redux/userSlice";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

import styled from "styled-components";
import { mobile } from "../responsive";
import {useEffect, useState} from "react";

import axios from 'axios'
import {Proxy} from '../components/constants'


const Container = styled.div`
  width: 100vw;
  height: 65vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://e0.pxfuel.com/wallpapers/397/13/desktop-wallpaper-a-bathing-ape-abc-camo-ape-head-1st-camo-more-green-bape.jpg")
      center;
  background-size: cover;
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position:absolute;
  top:10%;
  width: 40%;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

`;

const Containerrr = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const Message = styled.div`
  margin: 20px 0 ;
  min-width:40vh;
  color: red;
`

const Register = () => {

  
  const [firstname , setFirstname] = useState("") ;
  const [lastname , setLastname] = useState("") ;
  const [username , setUsername] = useState("") ;
  const [email , setEmail] = useState("") ;
  const [password , setPassword] = useState("") ;
  const [pwd , setPwd] = useState("") ;
  const [ pwdmatch , setPwdmatch ] = useState(true)

  const dispatch = useDispatch() ;

  const handleRegister = (data) => {
    console.log('JWT ADDED',data.jwt)
    store.dispatch(newUser(email))
    
    store.dispatch(setJwt(data.jwt))

  }

  const handleClick = (e) => {
    try {
        axios
            .post(`${Proxy}/api/customer`,{email:email , pwd:password , firstname:firstname , lastname:lastname , username:username  })
            .then((res)=>{ handleRegister(res.data) ;})
            .catch((err) => console.log('error') )  // dispatch(badUser())  )
    } catch (err) {
      dispatch(badUser())  ;
    }
  }

  useEffect(()=>{
    setPwdmatch(pwd === password)
  },[pwd,password])
  return (
    <Containerrr>
    <Navbar></Navbar>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type='text'
            onChange={(e)=>setFirstname(e.target.value)} 
            required
          placeholder="First name" />
          <Input type='text'
            onChange={(e)=>setLastname(e.target.value)} 
            required
          placeholder="Last name" />
          <Input type='text'
            onChange={(e)=>setUsername(e.target.value)} 
            required placeholder="Username" />
          <Input type='email'
            onChange={(e)=>setEmail(e.target.value)} 
            required placeholder="Email" />
          <Input type='password'
            onChange={(e)=>setPassword(e.target.value)} 
            required placeholder="Password" />
          <Input type='password'
            onChange={(e)=>setPwd(e.target.value)} 
            required placeholder="Confirm password" />
          
            { !pwdmatch && pwd.length >= password.length ? <Message>Your passwords don't match.</Message> : ""}
          
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>privacy policy</b>.
          </Agreement>
          <Button onClick={(e)=>{pwdmatch && handleClick(e)}}  >Register</Button>
        </Form>
      </Wrapper>
    </Container>
    <Footer></Footer>
    </Containerrr>
  );
};

export default Register;