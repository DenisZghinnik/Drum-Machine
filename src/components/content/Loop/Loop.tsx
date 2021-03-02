import React, {useEffect} from 'react';
import styled from 'styled-components/macro';
import Slider from "./Slider/Slider";
import LoopPoints from "./LoopPoints/LoopPoints";
import LoopDrums from './LoopDrums/LoopDrums';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPoint, getIntervalTime, getLoopPoints, getPlay} from "../../../selectors/selectors";
import {loopActions} from "../../../redux/reducers/loopReducer";

type Props = {};

const Loop = (props: Props) => {

    return (
        <Container>
            <Slider/>
            <LoopPoints/>
            <LoopDrums/>
        </Container>
    );
};
export default React.memo(Loop);

const Container = styled.div`
  border-radius: 5px;
  padding-top: 12px;
  background-color: #334;
`