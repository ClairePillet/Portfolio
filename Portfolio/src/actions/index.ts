import * as redux from "redux";
import * as moment from "moment";
import * as thunk from "redux-thunk";
import * as types from "../common/types";
import * as constant from "../common/constant";
import * as projectData from "../data/project_data"
import * as _ from "lodash";
import { Promise, polyfill } from "es6-promise";
import * as Helper from "../Helper"

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
function createGroup(group: types.IGroup, datas: types.ITasksProps, bFilter: Boolean): Promise<any>{
    return new Promise((resolve, reject) => {
        try {
            let tempstr = group.strGroup;
            let item = group.lstGroupCreated.filter((d) => {
                return group.groupId === d.FieldKeyId;
            });
            if (bFilter) {
                datas.data.forEach((v) => {
                    if (v.type === "project") {
                        datas.data.splice(datas.data.indexOf(v), 1);
                    }
                })
            } else {
                datas.data = JSON.parse(JSON.stringify(datas.dataFirst));
            } 
           
            if (item[0] != null && item[0] != undefined) {
                if (tempstr.indexOf("[Ent]") !== -1) {
                    tempstr = tempstr.substring(5);
                }
                if (item[0].Entities === "Task") {

                    group.lstGroupValueSelected.forEach((d) => {
                      
                        d.id = d.key;
                        d.type = "project";
                        datas.data.push(d);
                    });
                    let lstnewgr: Array<any> = new Array<any>();
                    let lstproj = datas.data.filter((p) => {
                        return p.type === "task";
                    });
                    //rem project  in data
               
                    //  datas.data.
                  
                    datas.data.forEach((v) => {
                        let temp = lstproj.filter((p) => {
                            return p.id === v.parent;
                        });
                        let proj = JSON.parse(JSON.stringify(temp));
                        if (proj.length > 0) {
                            proj[0].parent = v[tempstr];
                            proj[0].id = proj[0].id + v[tempstr];
                            v.parent = v.parent + v[tempstr];

                            lstnewgr.push(proj[0]);
                        }
                       
                        //   lstnewgr.push(temp) ;
                    });
                    console.log(lstnewgr);
                    datas.data = datas.data.concat(lstnewgr);
                    lstproj.forEach((v) => {

                        datas.data.splice(datas.data.indexOf(v), 1);

                    });
                    console.log(datas.data);
                    resolve(datas.data);
                } else {

                    console.log("proj")
                    group.lstGroupValueSelected.forEach((d) => {
                       
                        d.id = d.key;
                        d.type = "project";
                        datas.data.push(d);

                    })
                    let lstproj = datas.data.filter((p) => {
                        return p.type === "task";
                    });
                    lstproj.forEach((v) => {
                        v.parent = v[tempstr];
                    })
                    resolve(datas.data);
                }
            }
        } catch (e) {
            console.log(e);
            reject(new Error(e));
        }
      
    })
}
export function saveFilter(tab: any) {
    return (dispatch: Function, getState: Function) => {
        const state: types.IStoreState = getState();
        console.log("start save");
      let  datas =state.datas;
      let params =state.params;
      let  group =  state.group;
      let filter = state.filter;
      let ui = state.ui;
      filter.idFilter="-2"
      dispatch({
          type: SAVING,
          params,
          datas,
          group, ui,
          filter
      } as IAction);
        console.log(tab)
        projectData.getLineDelFilter(tab[0].idFilter).then(() => {
            let i = 0;
            if (tab[0].DefaultUse === null) {
                tab[0].DefaultUse = false;
            }
            let arrPromises = new Array<Promise<any>>();
            console.log(tab)
            tab.forEach(filter => {

             
                if (i === tab.length - 1) {
                    filter.OrAnd = null;
                }

                    arrPromises.push(projectData.addFilterList("1", filter.FieldKey, tab[0].Type, tab[0].DefaultUse, params.userId, filter.FieldKeyId, i, tab[0].Name, filter.Operator, filter.Value, filter.OrAnd, tab[0].idFilter));

                    i++;

            })
            console.log(tab)
            Promise.all<any>(arrPromises).then(() => {

                params.change = true;
                console.log("savefilter promise then")
                ui.openFilter = false
                console.log("end save");
                dispatch({
                    type: SAVE_SUCCESS,
                    params,
                    datas,
                    group, ui,
                    filter
                } as IAction);
            }).catch(e => {
                dispatch({
                    type: LOAD_DATA_ERROR,
                    e
                } as IAction);
                console.log(e)
                });
        });
    }
}
export function addFilter(NameNewFilter: string, type:any) {
    return (dispatch: Function, getState: Function) => {
        const state: types.IStoreState = getState();

        let datas = state.datas;
        let params = state.params;
        let group = state.group;
        let filter = state.filter;
        let ui = state.ui;
        filter.idFilter = "-2";
        dispatch({
            type: SAVING,
            params,
            datas,
            group, ui,
            filter
        } as IAction);
        let strField = "";
 
        if (type.textContent.substring(0, type.textContent.length - 1).indexOf("Ent") !== -1) {
            strField = "[Ent]" + NameNewFilter;
        } else {
            strField = NameNewFilter;
        }
        let guid = Helper.createGuid();
      
        projectData.addFilterListFirst(type.textContent.substring(0, type.textContent.length - 1), params.userId, strField, guid).then((e: any) => {
            params.change = true;
            try {
                params.change = true;

                filter.lstFilterCreated.push({ Type: type.textContent.substring(0, type.textContent.length - 1), idUser: params.userId, NameFilter: strField, Id: e.Id })
              //  applyParams(params, datas, group, filter, ui);
                dispatch({
                    type: SAVE_SUCCESS,
                    params,
                    datas,
                    group, ui,
                    filter
                } as IAction);
            } catch (e) {
                console.log(e);
                dispatch({
                    type: LOAD_DATA_ERROR,
                    e
                } as IAction);
            }
        });
     
    }
}
export function delGroup(row: any) {
    return (dispatch: Function, getState: Function) => {
        const state: types.IStoreState = getState();
        try {

        let datas = state.datas;
        let params = state.params;
        let group = state.group;
        let filter = state.filter;
        let ui = state.ui;
        group.groupId = "-2";
        dispatch({
            type: SAVING,
            params,
            datas,
            group, ui,
            filter
        } as IAction);
        let strField = "";
        let temp = group.lstGroupCreated.filter((x) => {
            return row === x.FieldKeyId;
        })[0];
        projectData.delGroupList(temp.Id.toString()).then((ex) => {
    
                group.lstGroupCreated.splice(group.lstGroupCreated.indexOf(temp), 1);
                params.change = true;
                console.log(temp);
                dispatch({
                    type: SAVE_SUCCESS,
                    params,
                    datas,
                    group, ui,
                    filter
                } as IAction);
        
        }).catch(e => {
            console.log("z")
            console.log(e)
            dispatch({
                type: LOAD_DATA_ERROR,
                e
            } as IAction);
            });
        } catch (e) {
            console.log("z")
            console.log(e);
            dispatch({
                type: LOAD_DATA_ERROR,
                e
            } as IAction);
        }
      }
}
export function delFilter(row: any) {
    return (dispatch: Function, getState: Function) => {
        const state: types.IStoreState = getState();

        let datas = state.datas;
        let params = state.params;
        let group = state.group;
        let filter = state.filter;
        let ui = state.ui;
        filter.idFilter = "-2";
        dispatch({
            type: SAVING,
            params,
            datas,
            group, ui,
            filter
        } as IAction);
        let temp = filter.lstFilterFull.filter((x) => {

            return row === x.idFilter;

        })[0];

        filter.lstFilterCreated.splice(filter.lstFilterFull.indexOf(temp), 1);
        filter.lstFilterFull.splice(filter.lstFilterFull.indexOf(temp), 1);

      
        projectData.delFilter(temp.Id.toString()).then(() => {
            try {
                params.change = true;

                dispatch({
                    type: SAVE_SUCCESS,
                    params,
                    datas,
                    group, ui,
                    filter
                } as IAction);
            } catch (e) {
                console.log(e);
                dispatch({
                    type: LOAD_DATA_ERROR,
                    e
                } as IAction);
            }
        });
    }
}
export function addGroup(idFieldKey: string, type: any) {
    return (dispatch: Function, getState: Function) => {
        const state: types.IStoreState = getState();

        let datas = state.datas;
        let params = state.params;
        let group = state.group;
        let filter = state.filter;
        let ui = state.ui;
        group.groupId = "-2";
        dispatch({
            type: SAVING,
            params,
            datas,
            group, ui,
            filter
        } as IAction);
       

        let strField = "";
      
        let entitie = document.getElementById("ddEntitie"), field = document.getElementById("ddFieldKey"), type = document.getElementById("ddType");
        if (type.textContent.substring(0, type.textContent.length - 1).indexOf("Ent") !== -1) {
            strField = "[Ent]" + field.textContent.substring(0, field.textContent.length - 1);
        } else {
            strField = field.textContent.substring(0, field.textContent.length - 1);
        }
        projectData.addGroupList(entitie.textContent.substring(0, entitie.textContent.length - 1), strField, type.textContent.substring(0, type.textContent.length - 1), false, params.userId, idFieldKey).then((e:any) => {
            try {
                params.change = true;

                group.lstGroupCreated.push({ Type: type.textContent.substring(0, type.textContent.length - 1), idUser: params.userId, Entities: entitie.textContent.substring(0, entitie.textContent.length - 1), FieldKey: strField, FieldKeyId: idFieldKey, defaultUse:false ,Id: e.Id })
               ///applyParams(params, datas, group, filter, ui);
                dispatch({
                    type: SAVE_SUCCESS,
                    params,
                    datas,
                    group, ui,
                    filter
                } as IAction);
            } catch (e) {
                console.log(e);
                dispatch({
                    type: LOAD_DATA_ERROR,
                    e
                } as IAction);
            }
           
        });
    }
}
export function applyGroups(params?: types.IParams, datas?: types.ITasksProps, group?: types.IGroup, filter?: types.IFilter, ui?: types.IInterface) {
   
    return (dispatch: Function, getState: Function) => {
        const state: types.IStoreState = getState();
        //  let hasCheckedChanged = params ? (state.params.checked !== params.checked) : false;
        datas = datas || state.datas;
        params = params || state.params;
        group = group || state.group;
        
       ui = ui|| state.ui;
        let arrPromises: any = [projectData.loadGroupsDistinct(group.strGroup, datas.data)];
        return Promise.all<Array<any>, any[], any[]>(arrPromises).then(result => {
            group.lstGroupValueSelected = result[0];

            createGroup(group, datas, (filter.idFilter !== undefined && filter.idFilter !== null && filter.idFilter !== "-2") ).then((result) => {

                datas.data = result;
            
                dispatch({
                    type: APPLY_PARAMS,
                    params,
                    datas,
                    group, ui,
                    filter
                } as IAction);
            })
     
          




        }).catch((error: any) => {

            console.log(error);
            dispatch({
                type: LOAD_DATA_ERROR,
                error
            } as IAction);

        });

    }
}
/*export function applyFilter(params?: types.IParams, datas?: types.ITasksProps, group?: types.IGroup, filter?: types.IFilter, ui?: types.IInterface) {
    console.log("appfil")
    return (dispatch: Function, getState: Function) => {
        const state: types.IStoreState = getState();
      
        datas = datas || state.datas;
        params = params || state.params;
        group = group || state.group;
        ui = ui || state.ui;
        filter = filter || state.filter;
        let dataToFilter = datas.data;
        let selectedFilter = filter.lstFilterFull.filter((x) => {
            return x.idFilter === filter.idFilter;
        });
        try {
            // filter params
            let t;
            if (selectedFilter[0] !== undefined && selectedFilter[0] !== null) {
                if (selectedFilter.length > 0) {
                    let operator = undefined;
                    let arrFilteredSelection: any[];
                    selectedFilter.forEach((filter) => {
                        let TempArrFiltered: any[];
                        switch (selectedFilter[0].Operator) {
                            case "eq":
                                TempArrFiltered = dataToFilter.filter((dataItem) => { return dataItem[selectedFilter[0].FieldKey.replace(/\s/g, "")] === selectedFilter[0].Value; });

                                break;

                            case "substringof": TempArrFiltered = dataToFilter.filter(dataItem => {

                                return (dataItem[selectedFilter[0].FieldKey.replace(/\s/g, "")]) !== undefined ? (dataItem[selectedFilter[0].FieldKey.replace(/\s/g, "")]).indexOf(selectedFilter[0].Value) >= 0 : undefined
                            });
                                break;

                        }

                        if (TempArrFiltered[0] !== undefined) {
                            t = dataToFilter.filter((dataItem) => {
                                let tempArrFilteredSelection = TempArrFiltered;

                                return tempArrFilteredSelection.filter(x => {
                                    if (dataItem.type !== "project") {
                                        if (dataItem.type === "milestone") //if it's milestone
                                        {
                                            return dataItem.ProjectId === x.id;
                                        }
                                        return dataItem.id === x.id;;
                                    }
                                    return false;
                                }).length > 0;
                            });
                        }
                        if (operator === undefined) {
                            arrFilteredSelection = TempArrFiltered;
                        } else {
                               if (operator=== "or") {
                                arrFilteredSelection = arrFilteredSelection.concat(TempArrFiltered);
                            }
                            else {
                                   arrFilteredSelection = arrFilteredSelection.filter(function (selectionId) { return TempArrFiltered.indexOf(selectionId) >= 0; });
                            }

                        }
                        operator = filter.OrAnd;
                    });
                   
                }
            }
            if (t!==undefined){

                datas.data = t;
            }
            dispatch({
                type: APPLY_PARAMS,
                params,
                datas,
                group, ui,
                filter
            } as IAction);







        } catch(error)  {

            console.log(error);
            dispatch({
                type: LOAD_DATA_ERROR,
                error
            } as IAction);

        }

    }
}*/

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
        if (params.change) {
            params.change = false;
            projectData.getCrrentUser().then(user => {
                console.log(user[0]);
                params.userId = user[0].GUID;
                let arrPromises: any = [projectData.loadData("", ""), projectData.getGroupList(user.Id), projectData.getFilterList(user.Id),projectData.loadLstcfProj(), projectData.loadLstCfTask(), projectData.getFilterListLigth(user.Id), projectData.getLookupTableEntries(), projectData.loadLstcfProjText()];
                return Promise.all<any[], any[], any[],  types.IElementForDropDown[], types.IElementForDropDown[], types.IFilterLigth[], any[], types.IElementForDropDown[]>(arrPromises).then(result => {

                    datas.data = result[0];
                    datas.dataFirst = JSON.parse(JSON.stringify(result[0]));
                    group.lstCfTask = result[4];
                    group.lstCfProj = result[3];
                    params.change = false;
                    group.lstGroupCreated = result[1];
                    let defaultGroup = _.find(group.lstGroupCreated, (gr => { return gr.defaultUse === true; }));
                    if (defaultGroup !== undefined) {
                        group.groupId = defaultGroup.FieldKeyId;
                        group.strGroup = defaultGroup.FieldKey;
                        group.defaultValue = true;

                    }
                    filter.lstCfProj = result[7];
                    filter.lstFilterCreated = result[5];
                    params.lpt = result[6];
    
                    _.orderBy(datas, [filter.lstFilterFull], ['asc']);
                    filter.lstFilterFull = result[2];

                    let defaultfilter = _.find(filter.lstFilterCreated, (f => { return f.DefaultUse === true; }));
                    if (defaultfilter !== undefined) {
                        filter.idFilter = defaultfilter.idFilter;
                        filter.strFilter = defaultfilter.NameFilter;
                        filter.defaultValueFilter = true;

                    }

                    dispatch({
                        type: APPLY_PARAMS,
                        params,
                        datas,
                        group,
                        filter
                    } as IAction);


                }).catch((error: any) => {

                    console.log(error);
                    dispatch({
                        type: LOAD_DATA_ERROR,
                        error
                    } as IAction);

                });
            }).catch((error: any) => {

                console.log(error);
                dispatch({
                    type: LOAD_DATA_ERROR,
                    error
                } as IAction);

            });
        } else {
            dispatch({
                type: APPLY_PARAMS,
                params,
                datas,
                group,
                filter
            } as IAction);

        }
        

   
    }
}


//---------- Data ----------//
export function clearError() {
    return (dispatch: Function) => {
        dispatch({
            type: CLEAR_ERROR
        } as IAction);
    }
}