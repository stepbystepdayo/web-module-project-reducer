import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  SAVE_MEMORY,
  ADD_MEMORY,
  REMOVE_MEMORY,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: initialState.total,
      };
    case SAVE_MEMORY:
      return {
        ...state,
        memory: state.total,
      };
    case ADD_MEMORY:
      return {
        ...state,
        total: state.total + state.memory,
      };
    case REMOVE_MEMORY:
      return {
        ...state,
        memory: 0,
      };
    default:
      return state;
  }
};

// export default reducer;
