import * as redux from "redux";
import * as moment from "moment";
//import * as _ from "lodash";
//import * as types from "./common/types";
//import * as constant from "./common/constant";
//import * as actions from "./actions";


const INITIAL_STATE: any = {
   
}

export default function rootReducer(state = INITIAL_STATE, action: any): any {
    switch (action.type) {
    //    case actions.APPLY_PARAMS:
    //        if (state.ui.waitDlg !== null) {
    //            state.ui.waitDlg.close(SP.UI.DialogResult.OK)
    //        }

    //        return {
    //            ...state,
    //            params: action.params,
    //            datas: {
    //                ...action.datas,
    //                build: true,
    //            },

    //            ui: {
    //                ...state.ui,
    //                isLoading: false,
    //            },
    //            group: action.group

    //        };
    //    case actions.LOAD_DATA:
    //        if (state.ui.waitDlg !== null) {
    //            state.ui.waitDlg.close(SP.UI.DialogResult.OK)
    //        }

    //        return {
    //            ...state,
    //            params: action.params,
    //            datas: action.datas,

    //            ui: {
    //                ...state.ui,
    //                isLoading: true,
    //                waitDlg: SP.UI.ModalDialog.showWaitScreenWithNoClose("Working on it ...", "This dialog will close after the data is loaded"),
    //            }
    //        };
    //    case actions.SAVING:
    //        if (state.ui.waitDlg !== null) {
    //            state.ui.waitDlg.close(SP.UI.DialogResult.OK)
    //        }
    //        console.log("savong");

    //        return {
    //            ...state,
    //            params: action.params,
    //            datas: action.datas,

    //            ui: {
    //                ...state.ui,
    //                isLoading: true,
    //                waitDlg: SP.UI.ModalDialog.showWaitScreenWithNoClose("Working on it ...", "This dialog will close after the data is loaded"),
    //            }
    //        };
    //    case actions.SAVE_SUCCESS:
    //        if (state.ui.waitDlg !== null) {
    //            state.ui.waitDlg.close(SP.UI.DialogResult.OK)
    //        }
    //        console.log("save ok");

    //        return {
    //            ...state,
    //            params: action.params,
    //            datas: action.datas,

    //            ui: {
    //                ...state.ui,
    //                isLoading: false,
    //                waitDlg: null,
    //            }
    //        };
    //    case actions.LOAD_DATA_ERROR:
    //        if (state.ui.waitDlg !== null) {
    //            state.ui.waitDlg.close(SP.UI.DialogResult.OK)
    //        }
    //        return {
    //            ...state,
    //            ui: {
    //                ...state.ui,
    //                isLoading: false,
    //                error: action.error
    //            }
    //        };

    //    case actions.CLEAR_ERROR:
    //        if (state.ui.waitDlg !== null) {
    //            state.ui.waitDlg.close(SP.UI.DialogResult.OK)
    //        }
    //        return {
    //            ...state,
    //            ui: {
    //                ...state.ui,
    //                error: null
    //            }
    //        };

        default:
            return state;
    }
}