import styled from "styled-components";

const Container = styled.div`
        
        height: 25px;
        background-color : black ;        
        position:relative;
`

const Text = styled.div`
    color:white;
    margin:auto;
    font-size:10px;
    left: 10%
`

const Announcement = () => {
    
    return (
        <Container className="row">
            <Text>FREE SHIPPING ON ORDERS OVER US$250</Text>
        </Container>
    )
}


export default Announcement ;