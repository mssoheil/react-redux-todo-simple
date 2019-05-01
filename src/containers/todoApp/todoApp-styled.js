import styled from "styled-components";

const Wrapper = styled.div`
	width: 80%;
	height: auto;
	margin: 0 auto;
	margin-top: 50px;
`;

const HeaderText = styled.h4`
	text-align: center;
	margin: 0 auto;
	color: ${props => (props.color ? props.color : "gray")};
`;

export { Wrapper, HeaderText };
