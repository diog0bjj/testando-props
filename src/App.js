import React, { Component } from "react";
import About from "./Components/About"
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const Title = styled.h1`
  font-size: x-large;
  color:#000;
  margin:3rem;
`;

const Container = styled.div`
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.div`
height:15rem;
width:15rem;
border-radius:50%;
background-color:yellow;
border:solid black;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column
`;
const Principal = styled.div`
display:flex;
flex-wrap:wrap;
width:100vw;
justify-content:space-evenly;
`;

const Mouth = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:5rem;
height:2.5rem;
border-radius: 0 0 150px 150px;
background-color:black;
color:#fff;
font-size:x-small;`

const Eye = styled.div`
display:flex;
justify-content:center;
align-items:center;
color:#fff;
font-size:x-small;
width:2rem;
height:2rem;
background-color:black;
border-radius:50%;
`
const Eyes = styled.div`
width:15rem;
display:flex;
justify-content:space-evenly;
align-items:flex-start;
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style:none;
  }
  body{
    background-image:url('https://blogdoiphone.com/wp-content/uploads/2020/10/halfpaper_3.jpg');
    background-size:cover;
    background-position:center;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <div>
          <Title>Tentando usar props:</Title>
        </div>
        <Principal>
          <div>
            <About nome='Diogo' idade='19' disciplina='Reactjs' />
            <About nome='Santos' idade='7' disciplina='caligrafia' />
          </div>
          <Emoji>
            <Eyes>
              <Eye>V</Eye>
              <Eye>N</Eye>
            </Eyes>
            <Mouth>W</Mouth>
          </Emoji>
        </Principal>
        <div>
          <Title>Acho que consegui.</Title>
        </div>
      </Container>
    );
  }
}

export default App;
