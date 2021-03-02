import React from 'react';
import styled from 'styled-components/macro';
import Side from "../../Drums/Side";

type Props = {};
const LoopDrums = (props: Props) => {

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