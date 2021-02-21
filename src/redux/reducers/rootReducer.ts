import React from "react";
import {combineReducers} from "redux";
import {loopReducer} from "./loopReducer";
import {presetReducer} from "./presetReducer";

export const rootReducer = combineReducers({
    drums: presetReducer,
    loop: loopReducer
});

export type RootState = ReturnType<typeof rootReducer>;
