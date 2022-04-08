import React from 'react'
import styled from "styled-components";

const Box = styled.div`
width:18rem;
height:7.5rem;
background-color:white;
display:flex;
flex-wrap:wrap;
border:solid black;
justify-content:center;
align-items:center;
margin-bottom:1rem;
`;

const Listitem = styled.li`
margin:0.5rem;
`;

const About = ({nome, idade, disciplina}) => {
    return(
        <Box>
            <ul>
                <Listitem>ola, meu nome é {nome}</Listitem>
                <Listitem>tenho {idade} anos</Listitem>
                <Listitem>estou tentando aprender {disciplina}</Listitem> 
            </ul>
        </Box>
    )
};

export default About;