import React from "react";
import styled from 'styled-components';
import decepticon from '../decepticon.png';

export default function Nav(){
    return(
        <Navbar>
            <Liste>
                <Images src={decepticon}></Images>
                <Items href="/">Decepticon</Items>
            </Liste>
        </Navbar>
    )
}

const Images = styled.img`
height: 40px;
`

const Navbar = styled.div`
height: 50px;
background: linear-gradient(45deg, rgb(156,14,156),midnightblue) ;
`
const Liste = styled.ul`
list-style-type: none ;
background: linear-gradient(45deg, rgb(156,14,156),midnightblue) ;
height: 100%;
display: flex ;
justify-content: center ;
align-items: center ;
position: relative ;
`
const Items = styled.a`
margin-right: 10px;
color: #f1f1f1 ;
cursor: pointer;

`




