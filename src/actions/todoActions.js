import * as types from "./actionTypes";

export function addTodo(todo) {
	return {
		type: types.ADD_TODO,
		payload: todo
	};
}

export function removeTodo(todo) {
	return {
		type: types.REMOVE_TODO,
		payload: todo
	};
}
