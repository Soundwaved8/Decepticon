import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import ReactEcharts from "echarts-for-react"; 
import styled from 'styled-components';
import Texte from "../Nav/texte";
import soundwave from '../soundwave.mp3';

const Vilain = (props) => {
    const [badGuy, setBadGuy] = useState({})
    const route = useParams()
    console.log(route)

 
    useEffect(() => {
        const [chemists] = data.filter(bad =>
            bad.id === route.id
        );
        setBadGuy(chemists)
        console.log(chemists)
    },)


    return(
        <>
            <audio id="backgroundMusic" autoPlay>
<source src={soundwave}/>
</audio>
            <Ecriture><p>{badGuy.name}</p></Ecriture>
            <br/>
            <Images src={badGuy.image1}></Images>
            <Margin>
            <Petit>
             {badGuy.text ?
             <>
                <Texte text={badGuy.text}>
            </Texte> 
            <Texte text={badGuy.text1}>
            </Texte>
            <Texte text={badGuy.text2}>
            </Texte> 
            <Texte text={badGuy.text3}>
            </Texte> 
            <Texte text={badGuy.text4}>
            </Texte>  
            </>
            
            : null}
            </Petit> 
            </Margin>
            <Margin>
           {badGuy.stat ? <ReactEcharts option={badGuy.stat}/> : null }
           </Margin>
        </>
        
    );
}

const Images = styled.img`
height: 350px;
float: left;
`
const Ecriture = styled.div`
color: purple;
text-align: center ;
font-family: cursive ;
`
const Petit = styled.div`
text-align: center ;
font-family: "Gill Sans", sans-serif;
background-color: #5599FA ;
border:2px ridge black;

`
const Margin = styled.div`
margin: 100px ;
`;

export default Vilain;   