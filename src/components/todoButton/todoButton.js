import React from "react";
import { Wrapper } from "./todoButton-styled";

import PropTypes from "prop-types";

const TodoButton = props => {
	const { background, color } = props;
	
	return (
		<Wrapper
			onClick={() => {
				props.isClicked()
			}}
			background={background}
			color={color}
		>
			Add
		</Wrapper>
	);
};

TodoButton.propTypes = {
	background: PropTypes.string,
	color: PropTypes.string,
	isClicked: PropTypes.func
};

export default TodoButton;
