import axios from "axios";
import { store } from '../redux/store'
import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import Footer from '../components/Footer'
import {useDispatch, useSelector} from "react-redux";
import { logUser , badUser , setJwt} from "../redux/userSlice";
import Navbar from '../components/Navbar';
import {Proxy} from '../components/constants'


const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wave.fr/images/1916/04/bape-france-hoodie.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Formvalid = styled.div`
  margin-top:10px;
  margin-bottom:10px;
`

// 1 . GET USERNAME/PASSWORD
// 2. POST to the backend ------->    login(dispatch, {email, password});


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ validform , setValidform ] = useState(false)
  const [ usernotfound , setUsernotfound ] = useState(false)
  const dispatch = useDispatch();

  const handleLog = (data) => {
    if (data.isUser == "no") {
      setUsernotfound(true)
      setValidform(false)
    }
    else {
      store.dispatch(logUser(email))
      store.dispatch(setJwt(data.jwt))
      setUsernotfound(false)
    }
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    const setEm = new Set(email)
    if (setEm.has('@')) {
      setValidform(false)
      try {
          axios
              .post(`${Proxy}/api/customer`,{email:email , pwd:password})
              .then((res)=> handleLog(res.data))
              .catch((err) => store.dispatch(badUser()) )
      } catch (err) {
        store.dispatch(badUser()) ;
      }
    }
    else {
      setValidform(true)
      setUsernotfound(false)
    }
    
  }


  return (
    <>
    <Navbar></Navbar>
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type='email'
            placeholder="email" 
            onChange={(e)=>setEmail(e.target.value)} 
            required
          />
          <Input 
            placeholder="password"
            type="password"  
            onChange={(e)=>setPassword(e.target.value)} 
            required
          />
          <Button onClick={handleClick} >LOGIN</Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          { validform && <Formvalid>Please check your information. Your email is not well formatted.</Formvalid>}
          { usernotfound && <Formvalid>Couldn't find user.</Formvalid>}
          <Link>Forgot my password</Link>
        </Form>
      </Wrapper>
     
    </Container>
     <Footer /></>
  );
};

export default Login;