import React, { Component } from "react";

import { Wrapper, HeaderText } from "./todoApp-styled";

import TodoList from "./../../components/todoList/todoList";
import Todo from "./../../components/todo/todo";
import TodoButton from "./../../components/todoButton/todoButton";
import TodoInput from "./../../components/todoInputField/todoInput";

import customTheme from "./../../config/theme";

import { connect } from "react-redux";

class TodoApp extends Component {
	render() {
		const { color } = customTheme,
			{ todoList } = this.props;
		return (
			<Wrapper borderColor={color.textLight}>
				<HeaderText color={color.textDark}>Todo list</HeaderText>
				<TodoList>
					{todoList.map((item, index) => {
						return <Todo key={`todo_${index}`}>{item}</Todo>;
					})}
				</TodoList>
				<TodoInput />
        <br />
				<TodoButton background={color.primary} color={color.textLight}>
					Add
				</TodoButton>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		todoList: state.todoAppReducer.todoList
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoApp);
