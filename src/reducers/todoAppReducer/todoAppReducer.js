const todoAppReducer = (state = {
    todoList: ["initTodo"]
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
