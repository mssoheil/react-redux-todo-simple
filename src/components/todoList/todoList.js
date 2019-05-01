import React from "react";

import { Wrapper } from "./todoList-styled";

const TodoList = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default TodoList;
