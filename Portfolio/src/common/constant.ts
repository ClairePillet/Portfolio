
export const LOCAL_STORAGE_KEY = "DPCApp";

export const arrLevel = [
    { key: '1', text: 'Level 1' },
    { key: '2', text: 'Level 2' },
    { key: '3', text: 'Level 3' }
];

export const arrEntities = [
    { key: '1', text: 'Project' },
    { key: '2', text: 'Task' }

];

export const arrType = [
    { key: '1', text: 'Enterprise' },
    { key: '2', text: 'Personal' }

];
export enum FilterTest {
    'eq' = 'equals',
    'substringof' = 'Contains'
}

export enum FilterOperators {
    'or' = 'Or',
    'and' = 'And'
}