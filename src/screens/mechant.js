import React from "react";
import styled from 'styled-components';
import data from "./data";

const Mechant = props =>{

    return(
        <Ecriture>
        <>
        <b>Personnages</b>
        <br/>
        <br/>
        <Display>
        {data.map(bad => 
        <div>
        <br/>
        <Border>
        <Images src={bad.image}>
        </Images>
        <br/>
        <p>{bad.name}</p>
        <a href={bad.link}>
        <Buttom>Description</Buttom> 
        </a>
        <br/>
        </Border>
        </div>
        )}
        </Display>
        </>
        </Ecriture>
    );

}
Mechant.prototype = {
    
};
const Buttom = styled.div`
position: relative;
padding: 0.1em 1em;
background: linear-gradient(135deg, rgba(255,0,0,.2), rgba(0,0,255,.2));
border: none;
border-radius: 10px;

color: white;
text-shadow: 1px 2px 2px rgba(255,0,255,.2);
cursor: pointer;
text-align: center;
font-family: 'Bungee', cursive;
transition: all .2s linear;
.style-1:hover {
text-shadow: 2px 3px 4px rgba(0,0,255,.2);
padding: 0.2em 1em;
}

`

const Display = styled.div`
display: grid ;
grid-template-columns: repeat(2, 50%) ;
margin-left: 150px ;

`
const Border = styled.div`
position: relative;
@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
	position: relative;
	z-index: 0;
	width: 400px;
	height: 300px;
	margin: 20px;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #1a232a;
		background-repeat: no-repeat;
		background-position: 0 0;
		background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
		animation: rotate 4s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: grey;
		border-radius: 5px;
	}


`

const Images = styled.img`
height: 250px;
float: center ;
`

const Ecriture = styled.div`
text-align: center ;

`

export default Mechant;