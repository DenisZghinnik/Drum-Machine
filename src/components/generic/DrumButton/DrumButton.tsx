import React, {useState} from 'react';
import {Button} from './DrumButton.style';

type DrumButtonProps = {
    colorType: string,
    sound: any,
    id: string
};

const DrumButton = (props: DrumButtonProps) => {
    const {id, sound, colorType} = props;
    const [animate, setAnimate] = useState(false);
    const animationEnd =()=>{setAnimate(false)};
    const play=()=>{
        setAnimate(true);
        sound.currentTime=0;
        sound.play();
    };
    return <Button id={id}
                   colorType={colorType}
                   animate={animate}
                   onClick={play}
                   onAnimationEnd={animationEnd}/>
};
export default DrumButton;


