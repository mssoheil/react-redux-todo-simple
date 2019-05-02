import React, { Component } from "react";

import TodoList from "./../../components/todoList/todoList";
import Todo from "./../../components/todo/todo";
import TodoButton from "./../../components/todoButton/todoButton";
import TodoInput from "./../../components/todoInputField/todoInput";

import { Wrapper, HeaderText } from "./todoApp-styled";

import customTheme from "./../../config/theme";

import { connect } from "react-redux";

import { addTodo, removeTodo } from "./../../actions/todoActions";

class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fieldValue: ""
		};

		this.changeInputValue = this.changeInputValue.bind(this);
	}

	changeInputValue(val) {
		this.setState({ fieldValue: val });
	}

	render() {
		const { color } = customTheme,
			{ todoList, addTodo, removeTodo } = this.props;
		return (
			<Wrapper borderColor={color.textLight}>
				<HeaderText color={color.textDark}>Todo list</HeaderText>
				<TodoList>
					{todoList.map((item, index) => {
						return <Todo key={`todo_${index}`}>{item}<span onClick={() => {removeTodo(index)}} style={{cursor: "pointer"}}>&times;</span></Todo>;
					})}
				</TodoList>
				<TodoInput
					inputValue={this.state.fieldValue}
					changeValue={this.changeInputValue}
				/>
				<br />
				<TodoButton
					isClicked={() => { addTodo(this.state.fieldValue);
					this.setState({fieldValue: ""}) }}
					background={color.primary}
					color={color.textLight}
				>
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
	return {
		addTodo: todo => {
			dispatch(addTodo(todo));
		},
		removeTodo: index => {
			dispatch(removeTodo(index));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoApp);
