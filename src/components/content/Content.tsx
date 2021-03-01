import React from 'react';
import styled from 'styled-components';
import DrumsContainer from "./Drums/DrumsContainer";
import Loop from "./Loop/Loop";
import { useSelector } from "react-redux";
import { getLoopModeIsActive } from "../../selectors/selectors";

type Props = {};

const Content = (props: Props) => {
    const loopModeIsActive = useSelector(getLoopModeIsActive)
    return (
        <Container>
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
`