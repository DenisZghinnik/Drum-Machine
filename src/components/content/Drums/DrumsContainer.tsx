import React, {SyntheticEvent, useEffect} from 'react';
import styled from 'styled-components';
import Side from "./Side";
import sideA from "../../../presets/EDM/sideA/sideA";
import sideB from '../../../presets/EDM/sideB/sideB';
import {useSelector} from "react-redux";
import {getFirstIsActive} from "../../../selectors/selectors";

type DrumsContainerProps = {};

const DrumsContainer = (props: DrumsContainerProps) => {
    const firstIsActive = useSelector(getFirstIsActive);

    useEffect(()=>{
        const handleKeyDown = (e: KeyboardEvent) => {document.getElementById(e.key.toLowerCase())?.click()};
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {document.removeEventListener('keydown', handleKeyDown)};
    },[])


    return (
        <div>
            {firstIsActive
                ? <Side side={sideA}/>
                : <Side side={sideB}/>}
        </div>
    );
};
export default DrumsContainer;


