import React, { Component } from "react";

import { Wrapper, HeaderText } from "./todoApp-styled";

import customTheme from "./../../config/theme";

export default class todoApp extends Component {
	render() {
		return (
			<Wrapper>
				<HeaderText color={customTheme.color.textDark}>Todo list</HeaderText>
			</Wrapper>
		);
	}
}
