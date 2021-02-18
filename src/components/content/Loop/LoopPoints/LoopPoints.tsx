import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPoint,
    getIntervalTime,
    getLoopPoints,
    getPlay
} from "../../../../selectors/selectors";
import LoopPoint from "./LoopPoint/LoopPoint";
import {loopActions} from "../../../../redux/reducers/loopReducer";

type Props = {};
const LoopPoints = (props: Props) => {
    const dispatch = useDispatch();
    const play = useSelector(getPlay);
    const loopPoints = useSelector(getLoopPoints);
    const intervalTime = useSelector(getIntervalTime);
    const currentPointIndex = useSelector(getCurrentPoint);

    const player = () => {
        if(play&&currentPointIndex!==null) {
            loopPoints[currentPointIndex][currentPointIndex].forEach(a => {
                if (!a.isPaused) {
                    a.sound.currentTime = 0;
                    a.sound.play()
                };
            });
            setTimeout(()=>{dispatch(loopActions.setCurrentPoint())}, intervalTime);
       };
    };

    useEffect(player,[play, currentPointIndex])
    return (
        <Container>
            {loopPoints.map((a,i)=><LoopPoint pointSounds={loopPoints[i][i]}
                                              id={i}
                                              key={i*23}
            />)}
        </Container>
    );
};
export default React.memo(LoopPoints);

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;
