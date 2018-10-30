import * as redux from "redux";
import * as moment from "moment";
import * as types from "./common/types";
import * as constant from "./common/constant";
import * as actions from "./actions";


const INITIAL_STATE: types.IStoreState = {
    params: {
        checked: false,
        level: 1,
        userId: "",
        lpt: [],
        change: true
    },
    datas: {
        build: false,
        dataFirst: null,
        data: null,
        links: null,
        tasks: null
    },

    ui: {
        isLoading: true,
        openGroup: false,
        openFilter: false,
        error: null,
        scale: 0,
        idTask: null
      
    },
    group: {
        groupId: '2',
        strGroup: "",
        typeGroup: "",
        defaultValue: false,
        lstCfTask: [],
        lstCfProj: [],
        lstGroupCreated: [],
        lstGroupValueSelected: [],
    },
    filter: {
        idFilter: "-2",
        strFilter: "",
        filter: "",
        typeFilter: "",
        defaultValueFilter: false,
        lstFilterCreated: [],
        lstCfTask: [],
        lstCfProj: [],
        lstFilterFull: []
    }
}

export default function rootReducer(state = INITIAL_STATE, action: actions.IAction): types.IStoreState {
    switch (action.type) {
        case actions.APPLY_PARAMS:
          
            return {
                ...state,
                params: action.params,
                datas: {
                    ...action.datas,
                    build: true,
                },

                ui: {
                    ...state.ui,
                    isLoading: false,
                },
                group: action.group

            };
        case actions.LOAD_DATA:
           
            return {
                ...state,
                params: action.params,
                datas: action.datas,

                ui: {
                    ...state.ui,
                    isLoading: true
                            }
            };
        case actions.SAVING:
           
            console.log("savong");

            return {
       
                params: action.params,
                datas: action.datas,

                ui: {
                    ...state.ui,
                    isLoading: true,
                            }
            };
        case actions.SAVE_SUCCESS:
            
            return {
                ...state,
                params: action.params,
                datas: action.datas,

                ui: {
                    ...state.ui,
                    isLoading: false,
                 
                }
            };
        case actions.LOAD_DATA_ERROR:
           
            return {
                ...state,
                ui: {
                    ...state.ui,
                    isLoading: false,
                    error: action.error
                }
            };

        case actions.CLEAR_ERROR:
           
            return {
                ...state,
                ui: {
                    ...state.ui,
                    error: null
                }
            };

        default:
            return state;
    }
}