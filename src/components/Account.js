import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useSelector } from 'react-redux';
import {Proxy} from '../components/constants'

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

    const [ fetching , setFetching ] = useState(true)

    const jwwt = useSelector((state) =>  (state.user.jwt)) ;
    const handleClick = () => {
        props.snd(false)
    }

    const [ info , setInfo ] = useState([])
    console.log(info)
    useEffect(()=>{
        axios.post(`${Proxy}/api/customer/token`,{jwt:jwwt})
        .then((res)=> {setInfo(res.data.info) ; setFetching(false)})
        .catch((err) => console.log("Error during fetching customer profil data.",err) )
    },[])
    // info?.length===0 && 

    if (fetching === true ) {
        return (
            <div style={{minHeight:'200px'}}>
                <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />

                <EmptyCmds>Fetching</EmptyCmds>
            </div>
        )
    }
    else {
        if (info?.length>0) {
            return(
                <Container>
                    <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                    <Wrapper>
                        <div style={{marginBottom:'10px'}} >EMAIL : {info[0]}</div>
                        <div style={{marginBottom:'10px'}} >PASSWORD : {info[1]}</div>
                        <div style={{marginBottom:'10px'}} >USERNAME : {info[4]}</div>
                        <div style={{marginBottom:'10px'}} >FIRST NAME : {info[2]}</div>
                        <div style={{marginBottom:'10px'}} >LAST NAME : {info[3]}</div>


                    </Wrapper>

                </Container>
            )
        } else {
            return (<div style={{minHeight:'200px'}}>
                <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                <EmptyCmds>Couldn't get your profile.</EmptyCmds>
                </div>)
        } 
    }
}


export default Account ;