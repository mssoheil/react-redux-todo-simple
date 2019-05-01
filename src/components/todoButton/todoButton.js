import React from "react";
import { Wrapper } from "./todoButton-styled";

const TodoButton = props => {
	const { background, color } = props;
	return (
		<Wrapper background={background} color={color}>
			Add
		</Wrapper>
	);
};

export default TodoButton;
