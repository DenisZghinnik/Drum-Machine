import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/macro';
import SliderBPM from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "react-redux";
import {getBpm, getBpmPoints} from "../../../../selectors/selectors";
import {loopActions} from "../../../../redux/reducers/loopReducer";

type SliderProps = {};

const Slider = (props: SliderProps) => {
    const dispatch = useDispatch();
    const bpmPoints = useSelector(getBpmPoints);
    const choosenBpm = useSelector(getBpm);
    const settings = {
        focusOnSelect: true,
        className: "center",
        centerPadding: '0px',
        infinite: true,
        centerMode: true,
        slidesToShow: 11,
        touchThreshold: 20,
        swipeToSlide: true,
        arrows: false,
        initialSlide: bpmPoints.indexOf(choosenBpm),
        afterChange: function (index: number) {
            dispatch(loopActions.setBPM(bpmPoints[index]))
        },
    };

    return (
        <Container>
            <Selected></Selected>
            <SliderBPM {...settings}>
                {bpmPoints.map((a, i) => <BpmPoint  key={i + a} data-value={i}>{a}</BpmPoint>)}
            </SliderBPM>
      </Container>
    );
};
export default React.memo(Slider);

const BpmPoint = styled.div`
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  will-change: transform;
  &:focus{
    outline: none;
    border: none;
  };
`;
const Container = styled.div`
  position: relative;
  &:before{
    content: '';
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background: linear-gradient(to left, #334, transparent, #334);
	z-index: 10;
	cursor: pointer;
    pointer-events: none;
  };

`
const Selected = styled.div`
  width: 47px;
  height: 20px;
  position: absolute;
  left: 45.2%;
  top: -2px;
  border: 1px solid #fff;
  border-radius: 3px;
  @media only screen and (max-width: 768px) {
    width: 9.2vw;
  };
`