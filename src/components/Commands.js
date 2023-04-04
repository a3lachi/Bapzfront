import styled from 'styled-components';
import {  useSelector} from 'react-redux';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Command from './Command'
import {Proxy} from '../components/constants'



const Container = styled.div`

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`


const Comand = styled.div`
    padding-left:20px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    margin-bottom:10px;
    &:hover {
        background-color :  #f8f4f4 ;
    }
`


const EmptyCmds = styled.div`
    padding: 10px 10px 10px 10px;
    margin-top:10px;
`


const Commands = (props) => {
    const jwwt = useSelector((state) =>  state.user.jwt)

    const [ cmds , setCmds] = useState([])

    const [ choseCmd , setChoseCmd ] = useState([])

    const [ fetching , setFetching ] = useState(true)

    const Haandleclick = (target) => {
        
        const chouz = cmds[Number(target.id)]
        console.log('haaaaaaa',target.id,chouz)
        setChoseCmd(chouz)
    }

    useEffect(()=>{
        axios.post(`${Proxy}/api/customer/token`,{jwt:jwwt})
        .then((res)=> {setCmds(res.data.data);setFetching(false)})
        .catch((err) => console.log("Error during fetching customer profil data.",err) )
    },[])

    const handleClick = () => {
        if (choseCmd?.length<1)
            props.snd(false)
        else 
            setChoseCmd([])
    }

    if (fetching ===true) {
        return (
            <div style={{minHeight:'400px'}}>
                <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                <EmptyCmds>Fetching</EmptyCmds>
            </div>
        )
    }
    else {
        if (cmds?.length>0) {
            if (choseCmd?.length===0) {
                return(
                    <Container>
                        <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                        <Wrapper>
                        { cmds.map((elem,indx)=>(
                            <Comand id={indx} key={indx} onClick={(e)=>{Haandleclick(e.target) ;}} >
                            Command passed on {elem[0]} {indx}:
                            { elem[1]?.map((el,inddx)=>(<img key={inddx} id={indx} alt={""} style={{width:'65px', height:'auto' , mixBlendMode: 'multiply'}} src={el[1]}/>)) }
                            </Comand>
                        ))}
                        </Wrapper>
                    </Container>
                )
            }
            else {
                return (
                    <Container>
                        <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                        <Wrapper>
                        
                        </Wrapper>
                        <Command cmd={choseCmd} />
                    </Container>
                )
            }
        } else {
            return (<div style={{minHeight:'400px'}}>
                <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                <EmptyCmds>You have purshased nothing yet.</EmptyCmds>
                </div>)
        } 
    }
} 


export default Commands ;