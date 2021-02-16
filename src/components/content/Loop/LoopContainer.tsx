import React from 'react';
import styled from 'styled-components';
import Slider from "./Slider/Slider";
import LoopPoints from "./LoopPoints/LoopPoints";
import LoopDrums from './LoopDrums/LoopDrums';

type LoopContainerProps = {};
const LoopContainer = (props: LoopContainerProps) => {





    return (
        <Container>
            <Slider/>
            <LoopPoints/>
            <LoopDrums/>
        </Container>
    );
};
export default LoopContainer;

const Container = styled.div`
  border-radius: 5px;
  padding: 10px 0;
  background-color: #334;
`