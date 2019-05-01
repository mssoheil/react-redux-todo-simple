const todoAppReducer = (state = {
    todoList: []
},
action) => {
	switch (action.type) {
		case "ADD_TODO":
			state = {
				...state,
				todoList: [...state.todoList, action.payload]
			};
			break;
	}
	return state;
};

export default todoAppReducer;
