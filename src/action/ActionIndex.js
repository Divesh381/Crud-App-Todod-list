import { ADD_TODOS, DELETE_TODOS, UPDATE_TODOS,EMPTY_TODOS } from "./Constant";

export const addTodos = (message) => ({
    type: ADD_TODOS,
    message,
    // id: Math.random(),
})
export const deleteTodos = (id) => ({
    type: DELETE_TODOS,
    id,

})
export const updateTodos = (message, id) => (
    {
        type: UPDATE_TODOS,
        message,
        id,
});
export const emptyTodos = (message) => (
    {
        type: EMPTY_TODOS,
        message,
});

