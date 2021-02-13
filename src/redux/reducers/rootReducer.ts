import React from "react";
import {combineReducers} from "redux";
import {navReducer} from "./navReducer";
import {loopReducer} from "./loopReducer";
import {drumsReducer} from "./drumsReducer";

export const rootReducer = combineReducers({
    nav: navReducer,
    drums: drumsReducer,
    loop: loopReducer
});

export type RootState = ReturnType<typeof rootReducer>;
