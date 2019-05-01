import React from "react";
import { Wrapper } from "./todoInput-styled";

const TodoInput = ({ children }) => {
	return <Wrapper type="text">{children}</Wrapper>;
};

export default TodoInput;
