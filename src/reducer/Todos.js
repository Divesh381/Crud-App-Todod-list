import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS,EMPTY_TODOS } from "../action/Constant";

const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        data: [...state.data, action.message],
      };
    case DELETE_TODOS:
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.id)],
      };
    case UPDATE_TODOS:
      return {
        ...state,
        data: [
          ...state.data.filter((todo) => todo.id !== action.id),
          { task: action.message, id: action.id },
        ],
      };
      case EMPTY_TODOS:
        return{...initialState}
    default:
      return state;
  }
};


export default todos;
