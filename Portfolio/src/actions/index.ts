import * as redux from "redux";
import * as moment from "moment";
import * as thunk from "redux-thunk";
import * as types from "../common/types";
import * as constant from "../common/constant";

import { Promise, polyfill } from "es6-promise";

export interface IAction extends redux.Action {
    params?: types.IParams,
    datas?: types.ITasksProps,
    group?: types.IGroup;
    filter?: types.IFilter,
    error?:any
}


//---------- Action types ----------//
export const LOAD_DATA = "LOAD_DATA";
export const APPLY_PARAMS = "APPLY_PARAMS";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const LOAD_DATA_ERROR = "LOAD_DATA_ERROR";

export const SAVING = "SAVING";
export const SAVE_SUCCESS = "SAVE_SUCCESS";

//---------- Data ----------//
export function applyParams(params?: types.IParams, datas?: types.ITasksProps, group?: types.IGroup, filter?: types.IFilter, ui?: types.IInterface) {
    console.log("apply params");
    return (dispatch: Function, getState: Function) => {

        const state: types.IStoreState = getState();
        let hasCheckedChanged;


        datas = datas || state.datas;
        params = params || state.params;
        filter = filter || state.filter;
        group = group || state.group;
        ui = ui || state.ui;
        dispatch({
            type: LOAD_DATA,
            params,
        } as IAction);
       
       
        

   
    }
}


//---------- Data ----------//
