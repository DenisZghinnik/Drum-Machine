import React, {useRef, useState} from 'react';
import { Button } from './DrumButton.style';

type DrumButtonProps = {
    colorType: string,
    sound: any,
    id: string
};

const DrumButton = (props: DrumButtonProps) => {
    const [animate, setAnimate] = useState(false);
    const clickHandler=()=>{
        setAnimate(true);
        props.sound.currentTime=0;
        props.sound.play();
    };
    const animationEnd =()=>{setAnimate(false)};
    return (
        <Button  id={props.id} colorType={props.colorType} animate={animate} onClick={clickHandler} onAnimationEnd={animationEnd}>
        </Button>
    );
};
export default DrumButton;


