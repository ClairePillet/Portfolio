export interface IParamProps extends IStoreDispatch {
    params: IParams;
    datas: ITasksProps;
    group: IGroup;
    filter: IFilter;
    ui: IInterface;
   
}
export interface IProject {
    id: Number,
    ProjectName: string,
    ProjectStartDate: Date,
    Duration: Number,
}
export interface IParamsState {
    checked: boolean,
    level: Number,
    change: boolean
    lpt:any[],
    build: Boolean,
    dataFirst: ITask[],
    data: ITask[],
    waitDlg: any;
    links: ILink[],
    tasks: any,
    groupId: string,
    strGroup: string,
    typeGroup: string,
    userId: string,
    defaultValue: boolean,
    lstCfTask: IElementForDropDown[],
    lstCfProj: IElementForDropDown[],
    lstGroupCreated: IGroupList[],
    lstGroupValueSelected: IElementForDropDown[],
    openGroup: boolean,
    openFilter: boolean,
    isLoading: boolean;
    error?: any;
    idFilter: string;
    strFilter: string;
    typeFilter: string;
    defaultValueFilter: boolean;
    lstFilterCreated: IFilterLigth[];
    lstFilterFull: IFilterList[];
    scale: any;
    filter: string;
    idTask: any;
    arrDdCf?:any;
    hideDialogGroup?:boolean;
    idFieldKey?:any;
    hideDialogFilter?: boolean;
    openDialogAddFilter?: boolean;
    NameNewFilter?: string;
}
export interface ITaskN{
    defaultProperties?: IDefaultProperties,
    customProperties?: JSON,
    data: any,
    id: any,
    text: string,
    start_date: string,
    end_date?: string,
    baselineStart: string,
    baselineEnd: string,
    duration: Number,
    progress?: Number,
    open?: boolean,
    parent?: number,
}
export interface IDefaultProperties {
    idTask: string;
    start_date: string,
    end_date?: string,
    baselineStart?: string,
    baselineEnd?: string,
    duration: Number,
    progress?: Number,
    parent: number,
    type?: any
}
export interface ITasksProps {
    build: Boolean,
    dataFirst: ITask[],
    data: any[],
    links: ILink[],
    tasks: any
}
export interface ITask {
    id: any,
    text: string,
    start_date: string,
    end_date?: string,
    baselineStart: string,
    baselineEnd: string,
    duration: Number,
    progress ?: Number,
    open ?: boolean,
    parent ?: number,
   
}
export interface IElementForDropDown {
    key?: any,
    text: any;
}
export interface IGroup {
    groupId: string;
    strGroup: string;
    typeGroup: string;
    defaultValue: boolean;
    lstCfTask: IElementForDropDown[];
    lstCfProj: IElementForDropDown[];
    lstGroupCreated: IGroupList[];
    lstGroupValueSelected: Array<any>;
}
export interface IFilter {
    idFilter: string;
    strFilter: string;
    typeFilter: string;
    defaultValueFilter: boolean;
    filter: string;
    lstCfTask: IElementForDropDown[];
    lstCfProj: IElementForDropDown[];
    lstFilterCreated: IFilterLigth[];
    lstFilterFull: IFilterList[];
}
export interface IFilterLigth {
    Type: string,
    idUser: string,
    NameFilter: string,
    Id:number
}
export interface IFilterList {
    Entities: string,
    FieldKey: string,
    Type: string,
    DefaultUse: boolean,
    idUser: string,
    idFilter: string,
    FieldKeyId: string,
    Name: string,
    Operator: string,
    Value: string,
    OrAnd: string,
    RowNumber: number;
    Id: number;
    boolLpt: boolean;
}
export interface ILink {
    id: Number,
    source: Number,
    target: Number,
    type: string
}
export interface ICheckboxBasicExampleState {
    isChecked: boolean;
}
export interface IGroupList {
    Entities: string,
    FieldKey: string,
    Type: string,
    defaultUse: boolean,
    idUser: string,
    FieldKeyId: string,
    Id: number;
}
export interface IParams  {
    checked: boolean;
    level: Number;
    lpt: any[];
    userId: string;
    change: boolean;
}
export interface IStoreState {
    params?: IParams;
    datas?: ITasksProps;
    group?: IGroup,
    ui?: IInterface;
    filter?: IFilter;
}
export interface IStoreDispatch {
    applyParams(params?: IParams, datas?: ITasksProps, group?: IGroup, filter?: IFilter, ui?: IInterface);
    applyGroups(params?: IParams, datas?: ITasksProps, group?: IGroup, filter?: IFilter, ui?: IInterface);
    applyFilter(params?: IParams, datas?: ITasksProps, group?: IGroup, filter?: IFilter, ui?: IInterface);
    saveFilter(tabs: any);
    addFilter(NameNewFilter: string, type: any);
    addGroup(idFilterKey: string, type: any);
    delFilter(row: any);
    delGroup(row: any)
    clearError();
}
export interface IInterface {
    isLoading: boolean;
    error?: any;
    openGroup: boolean;
    openFilter: boolean;
    scale: any;
    idTask: any;
    waitDlg: any;
}