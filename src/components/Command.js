import styled from "styled-components";

import {Proxy} from '../components/constants'


const Container = styled.div`
    padding : 10px 10px 20px 10px  ;

`

const Wrapper = styled.div`
    padding-top:30px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    gap:40px;

`

const Elem = styled.div`

`

const Divide = styled.div`
    height:4px;
    width:400px;
    background-color:black;
`
const Command = (props) => {

    const comnd = props.cmd

    const data = comnd[1]



    return (
        <Container>
            <div>Date : {comnd[0]}</div>
            <div>Address : {comnd[2]} </div>
            <Wrapper>
            {
                data.map((elem,indx)=>(
                    <>
                    <Elem key={indx} >
                        <div>{elem[0]} </div>
                        <img style={{width:'50px'}} alt={""}  src={elem[1]} /> x {elem[4]}   -   Size {elem[3]}  -  {elem[2]}
                        <Divide />
                    </Elem>
                    
                    </>
                ))
            }

            </Wrapper>
        </Container>
    )
}


export default Command ;