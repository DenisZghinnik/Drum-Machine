import React from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import styled from "styled-components";
import ContentContainer from "./components/content/ContentContainer";

function App() {

  return (
      <AppWrapper>
          <AppContainer>
              <HeaderContainer/>
              <ContentContainer/>
          </AppContainer>
      </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
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
