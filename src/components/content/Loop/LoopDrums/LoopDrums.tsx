import React, {useEffect} from 'react';
import styled from 'styled-components';
import Side from "../../Drums/Side";
import {useDispatch} from "react-redux";
import {loopActions} from "../../../../redux/reducers/loopReducer";

type LoopDrumsProps = {};
const LoopDrums = (props: LoopDrumsProps) => {
    const dispatch = useDispatch();
    return (
        <Container>
            <Side side='A' isSmall={true} />
            <Side side='B' isSmall={true} />
        </Container>
    );
};
export default LoopDrums;

const Container = styled.div`
  margin-top: 15px;
  display: flex;
`;