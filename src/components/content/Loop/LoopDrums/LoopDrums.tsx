import React, {useEffect} from 'react';
import styled from 'styled-components';
import Side from "../../Drums/Side";
import {useDispatch} from "react-redux";
import {loopActions} from "../../../../redux/reducers/loopReducer";

type LoopDrumsProps = {};
const LoopDrums = (props: LoopDrumsProps) => {

    return (
        <Container>
            <Side side='A'/>
            <Side side='B'/>
        </Container>
    );
};
export default React.memo(LoopDrums);

const Container = styled.div`
  margin-top: 15px;
  display: flex;
`;