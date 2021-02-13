import React, {useEffect, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import DrumButton from '../../generic/DrumButton/DrumButton';

type SideProps = {
    side: {
        name: string,
        sound: any,
        key: string,
        color: string
    }[]
};

const Side = (props: SideProps) => {
    return (
        <Container>
            {props.side.map((a,i)=><DrumButton id={a.key} key={`side${i}`} colorType={a.color} sound={a.sound}/>)}
        </Container>
    );
};
export default Side;


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 630px;
  justify-content: space-evenly;
  align-items: center;
`