import * as types from "./../../actions/actionTypes";

const todoAppReducer = (
	state = {
		todoList: []
	},
	action
) => {
	switch (action.type) {
		case types.ADD_TODO:
			state = {
				...state,
				todoList: [...state.todoList, action.payload]
			};
			break;
		case types.REMOVE_TODO:
			
			state = {
				...state,
				todoList: state.todoList.filter((todo, index) => {
					return index !== action.payload;
				})
			};

			break;
	}
	return state;
};

export default todoAppReducer;
