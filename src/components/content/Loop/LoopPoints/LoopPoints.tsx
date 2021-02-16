import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {getCurrentActiveButton, getLoopPoints} from "../../../../selectors/selectors";
import LoopPoint from "./LoopPoint/LoopPoint";

type LoopBodyProps = {};
const LoopPoints = (props: LoopBodyProps) => {

    const loopPoints = useSelector(getLoopPoints);
    const activeColorType = useSelector(getCurrentActiveButton).color;
    const activeButtonId = useSelector(getCurrentActiveButton).id;

    return (
        <Container>
            {loopPoints.map((a,i)=><LoopPoint pointSounds={loopPoints[i][i]}
                                              activeButtonId={activeButtonId}
                                              id={i}
                                              key={i*23}
                                              activeColorType={activeColorType}
            />)}
        </Container>
    );
};
export default LoopPoints;



const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;
