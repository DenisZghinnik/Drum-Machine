import React from 'react';
import Header from "./components/Header/Header";
import styled from "styled-components";
import Content from "./components/content/Content";

function App() {

  return (
      <AppWrapper>
          <AppContainer>
              <Header/>
              <Content/>
          </AppContainer>
      </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  height: 95vh;
  justify-content: center;
  align-items: center;
`

const AppContainer = styled.div`
  width: 500px;
  overflow: hidden;
  border-radius: 10px;
  color: #e5e5e5;
  font-size: 12px;
  font-family: sans-serif;
`;


export default App;
