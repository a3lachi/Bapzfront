import styled from 'styled-components';
import {  useSelector} from 'react-redux';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Command from './Command'
import {Proxy} from '../components/constants'

import { store } from '../redux/store'
import {useDispatch} from "react-redux";

import {setCommands} from '../redux/userSlice'


const Container = styled.div`

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`


const Comand = styled.div`
    padding-left:20px;
    min-height:81.25px;
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

    // grab jwt 
    const jwt = useSelector((state) =>  state.user.jwt)

    // grab user commands
    const cmds = useSelector((state) =>  state.user.commands)

     // grab fetch indice // COMMANDS CAN BE EMPTY SO CAN'T RELY ON IN TO MAKE REQUEST
     const commandsFetched = useSelector((state) =>  state.user.commandsFetched)

    // render indice
    const [ choseCmd , setChoseCmd ] = useState([])

    // first fetch
    const [ fetching , setFetching ] = useState(cmds.length === 0)

    // choose command
    const chooseCommand = (target) => {
        const renderCommand = cmds[Number(target.id)]
        setChoseCmd(renderCommand)
    }
    
    // fetch
    commandsFetched === false
    && axios
            .post(`${Proxy}/api/customer/token`,{jwt:jwt,info:'cmds'})
            .then((res)=> store.dispatch(setCommands(res.data.data)))
            .catch((err) => console.log("Error during fetching customer profil data.",err) )


    // render go back
    const handleClick = () => {
        if (choseCmd?.length<1)
            props.snd(false)
        else 
            setChoseCmd([])
    }





    // fetching ...
    if (commandsFetched === false) {
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
                // list of commands
                return(
                    <Container>
                        <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                        <Wrapper>
                        { cmds.map((elem,indx)=>(
                            <Comand id={indx} key={indx} onClick={(e)=>{chooseCommand(e.target) ;}} >
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
                    // chosen command
                    <Container>
                        <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                        <Wrapper>
                        
                        </Wrapper>
                        <Command cmd={choseCmd} />
                    </Container>
                )
            }
        } else {
            // empty commands list
            return (<div style={{minHeight:'400px'}}>
                <img width={40} src={process.env.PUBLIC_URL+'/back.png'} onClick={()=>handleClick()} />
                <EmptyCmds>You have purshased nothing yet.</EmptyCmds>
                </div>)
        } 
    }
} 


export default Commands ;