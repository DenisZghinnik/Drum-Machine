import React, { useEffect } from 'react';
import Header from "./components/Header/Header";
import styled, {createGlobalStyle} from "styled-components";
import Content from "./components/content/Content";
import { useDispatch} from "react-redux";
import { getPreset } from "./redux/reducers/presetReducer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPreset());
  }, [])

  return (

      <AppContainer>
        <GlobalStyle/>
        <Header/>
        <Content/>
      </AppContainer>

  );
}


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

const AppContainer = styled.div`
  width: 500px;
  color: #e5e5e5;
  font-size: 12px;
  font-family: sans-serif;
  position: relative;
  display: block;
  @media (max-width: 768px){
    width: 100vw;
  }
`;

export default App;
