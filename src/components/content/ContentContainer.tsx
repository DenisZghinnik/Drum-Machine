import React from 'react';
import styled from 'styled-components';
import DrumsContainer from "./Drums/DrumsContainer";

type ContentContainerProps = {};

const ContentContainer = (props: ContentContainerProps) => {

    return (
        <Container>
            <DrumsContainer/>
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