import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import styled from "styled-components";
import Content from "./components/content/Content";
import {useDispatch, useSelector} from "react-redux";
import {getPreset} from "./redux/reducers/presetReducer";
import {getIsFetching} from "./selectors/selectors";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
    const dispatch = useDispatch();
    const isFetching = useSelector(getIsFetching)
    useEffect(()=>{
        dispatch(getPreset());
    },[])

  return (
      <AppWrapper>
          <AppContainer>
              {isFetching&&<Preloader type="Oval" color='grey'/>}
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
  position: relative;
`;

const Preloader = styled(Loader)`
  position: absolute;
  z-index: 10;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.14);
`

export default App;
