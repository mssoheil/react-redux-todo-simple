import styled from "styled-components";

const Wrapper = styled.button`
	background: ${props => (props.background ? props.background : "green")};
	color: ${props => (props.color ? props.color : "white")};
    padding: 15px 20px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    width: 10%;
`;

export { Wrapper };
