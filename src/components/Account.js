import { store } from '../redux/store'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useSelector } from 'react-redux';
import {Proxy} from '../components/constants'
import { setCustomerAccountData } from '../redux/userSlice'

const Container = styled.div`
    

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`
const EmptyCmds = styled.div`
    padding: 10px 10px 10px 10px;
    margin-top:10px;
`


const Account = (props) => {

    // get user infos from store to update 
    const customer = useSelector(state => state.user) 
    console.log('USER EMAIL',customer.email)

    // fetchinf indice
    const [ fetching , setFetching ] = useState(customer.email.length === 0)

    // get jwt from store 
    const jwt = customer.jwt //useSelector((state) =>  (state.user.jwt)) ;
    
    // go back in render
    const renderBack = () => {
        props.snd(false)
    }

    // fetch for user info
    customer.username.length === 0 
    && axios
        .post(`${Proxy}/api/customer/token`,{jwt:jwt,info:'account'})
        .then((res)=> {console.log('INFO LI WSSLO',res.data.info) ; store.dispatch(setCustomerAccountData(res.data.info)) ; setFetching(false)})
        .catch((err) => console.log("Error during fetching customer profil data.",err) )


    if (fetching === true ) {
        return (
            <div style={{minHeight:'200px'}}>
                <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>renderBack()} />

                <EmptyCmds>Fetching</EmptyCmds>
            </div>
        )
    }
    else {
        if (customer?.email?.length>0) {
            return(
                <Container>
                    <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>renderBack()} />
                    <Wrapper>
                        <div style={{marginBottom:'10px'}} >EMAIL : {customer.email}</div>
                        <div style={{marginBottom:'10px'}} >PASSWORD : {customer.pwd}</div>
                        <div style={{marginBottom:'10px'}} >USERNAME : {customer.username}</div>
                        <div style={{marginBottom:'10px'}} >FIRST NAME : {customer.firstname}</div>
                        <div style={{marginBottom:'10px'}} >LAST NAME : {customer.lastname}</div>


                    </Wrapper>

                </Container>
            )
        } else {
            return (<div style={{minHeight:'200px'}}>
                <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>renderBack()} />
                <EmptyCmds>Couldn't get your profile.</EmptyCmds>
                </div>)
        } 
    }
}


export default Account ;