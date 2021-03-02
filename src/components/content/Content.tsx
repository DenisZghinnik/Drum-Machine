import React from 'react';
import styled from 'styled-components/macro';
import DrumsContainer from "./Drums/DrumsContainer";
import Loop from "./Loop/Loop";
import { useSelector } from "react-redux";
import {getIsFetching, getLoopModeIsActive } from "../../selectors/selectors";
import Loader from 'react-loader-spinner';

type Props = {};

const Content = (props: Props) => {
    const loopModeIsActive = useSelector(getLoopModeIsActive);
    const isFetching = useSelector(getIsFetching)
    return (
        <Container>
            {isFetching && <Preloader type="Oval" color='white' />}
            {loopModeIsActive
                ? <Loop />
                : <DrumsContainer />}

        </Container>
    );
};
export default React.memo(Content);

const Container = styled.div`
  background-color: #2F2F40;
  padding: 0 10px 20px 10px;
  position: relative;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 768px){
    height: 88vh;
  }
`;

const Preloader = styled(Loader)`
  position: absolute;
  z-index: 10;
  display: flex;
  top: -20px;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.14);
`