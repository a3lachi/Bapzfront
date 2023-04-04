import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ProductSmall from './ProductSmall';
import {Proxy} from '../components/constants'

const Container = styled.div`
    padding: 20px;
    min-height: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SelectModes = styled.div`
    width: 100%;
    margin: 20px;
`



const Products = ({cat, filters}) =>{
    
    const [data , setData] = useState([])

    const [ sort , setSort ] = useState(1)

    
    useEffect(()=>{
        axios
            .post(`${Proxy}/api/bapz/apparel`, {cat:cat})
            .then((res) => {
                setData(res.data.data) ;})
            .catch((err) => console.log(err));
    },[cat])

    const sortByPrice = () => {
        if (data) {
            const sortedProducts = Array.from(data).sort((a, b) => sort*(a[3] - b[3]));
            setData(sortedProducts);
            setSort(-1*sort)
        }
    }
        
    const sortDirec = sort>0 ? "rotate(0deg)" : "rotate(180deg)"
    
    if(data) {
        return(
            <>
            
            <Container id='brr' className="row">
                
                {cat 
                ? <>
                    <SelectModes id='yty'>
                        <div style={{ fontSize:'15px'}}  >Price <FilterListIcon style={{ cursor:'pointer' , transform: `${sortDirec}` }} onClick={sortByPrice} /></div> 

                    </SelectModes>
                
                    { data.map((item,index) => { return <ProductSmall key={index} id={index} item={item} cat={cat}/> }) }
                </>
                : data.map((item,index) => { return <ProductSmall key={index} id={index} item={item} /> } )}
                
            </Container>
            </>

        ) 
    }
    else  {
        return(
            <div style={{height:'1000px'}} ></div>
        )
    }
    
  }


  export default Products ;