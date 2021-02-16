import React from 'react';
import styled from 'styled-components';
import DrumsContainer from "./Drums/DrumsContainer";
import LoopContainer from "./Loop/LoopContainer";
import {useSelector} from "react-redux";
import {getLoopModeIsActive} from "../../selectors/selectors";

type ContentContainerProps = {};

const ContentContainer = (props: ContentContainerProps) => {
    const loopModeIsActive = useSelector(getLoopModeIsActive)
    return (
        <Container>
            {loopModeIsActive
                ? <LoopContainer/>
                : <DrumsContainer/>}
        </Container>
    );
};
export default ContentContainer;

const Container = styled.div`
  background-color: #2F2F40;
  padding: 0 10px 20px 10px;
  position: relative;
  height: 630px;
`