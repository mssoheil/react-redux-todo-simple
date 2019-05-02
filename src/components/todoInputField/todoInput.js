import React from "react";

import { Wrapper } from "./todoInput-styled";

import PropTypes from "prop-types";

const TodoInput = props => {
	const changeValue = event => {
		props.changeValue(event.currentTarget.value);
	};
	return (
		<Wrapper value={props.inputValue}
			type="text"
			onChange={event => {
				changeValue(event);
			}}
		/>
	);
};

TodoInput.propTypes = {
	inputValue: PropTypes.string.isRequired,
	changeValue: PropTypes.func.isRequired
};

export default TodoInput;

