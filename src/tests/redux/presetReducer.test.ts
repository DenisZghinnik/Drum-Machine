import React from 'react';
import {DrumsState, presetActions, presetReducer} from "../../redux/reducers/presetReducer";
import {faDiceD20} from "@fortawesome/free-solid-svg-icons";

const initialState: DrumsState = {
    isFetching: false,
    firstSideIsActive: true,
    showSelect: false,
    icon: faDiceD20,
    sideA: [{
        name: '',
        sound: null,
        key: '',
        color: '',
        id: ''
    }],
    sideB: [{
        name: '',
        sound: null,
        key: '',
        color: '',
        id: ''
    }]
};

describe('preset reducer', () => {
  it('should toggle firstSideIsActive', ()=>{
      const action = presetActions.toggleSide();
      const newState = presetReducer(initialState, action);
      expect(newState.firstSideIsActive).toBe(!initialState.firstSideIsActive);
  });
  it('should toggle showSelect', ()=>{
      const action = presetActions.togglePresetSelect();
      const newState = presetReducer(initialState, action);
      expect(newState.showSelect).toBe(!initialState.showSelect);
  });

  it('should set isFetching to true', ()=>{
      const action = presetActions.getPresetRequest();
      const newState = presetReducer(initialState, action);
      expect(newState.isFetching).toBe(true);
  });
  it('should set isFetching to false',()=>{
      const action = presetActions.getPresetFail();
      const newState = presetReducer(initialState, action);
      expect(newState.isFetching).toBe(false);
  });
   it('should set isFetching to false, set presets sides', ()=>{
       const sideData = [{
           name: 'nameTest',
           sound: null,
           key: 'keyTest',
           color: 'colorTest',
           id: 'idTest'
       }];
       const action = presetActions.getPresetSuccess({sideA: sideData, sideB: sideData}, faDiceD20);
      const newState = presetReducer(initialState, action);
      expect(newState.isFetching).toBe(false);
      expect(newState.sideA).toBe(sideData);
      expect(newState.sideB).toBe(sideData);
      expect(newState.icon).toBe(faDiceD20);
   });
});