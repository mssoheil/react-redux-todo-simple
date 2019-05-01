import React from "react";
import { Wrapper } from "./todo-styled";

const Todo = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Todo;
