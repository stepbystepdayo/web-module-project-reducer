export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SAVE_MEMORY = "SAVE_MEMORY";
export const ADD_MEMORY = "ADD_MEMORY";
export const REMOVE_MEMORY = "REMOVE_MEMORY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const saveMemory = () => {
  return { type: SAVE_MEMORY };
};
export const addMemory = () => {
  return { type: ADD_MEMORY };
};
export const removeMemory = () => {
  return { type: REMOVE_MEMORY };
};
