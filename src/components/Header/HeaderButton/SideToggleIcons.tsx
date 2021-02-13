import React from 'react';
import {SideIcon} from './HeaderButton.style';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type SideToggleProps = {
    isActive:boolean
    icon1: IconDefinition
    icon2: IconDefinition
};

const SideToggleIcons = (props: SideToggleProps) => {

    return (
            <div>
                <SideIcon $isActive={props.isActive} icon={props.icon1}/>
                <SideIcon $isActive={!props.isActive} icon={props.icon2}/>
            </div>
    );
};
export default SideToggleIcons;