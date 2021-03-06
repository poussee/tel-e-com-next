import styled from 'styled-components';

export const BackToTopButton = styled.button`
	position: fixed;
	bottom: 50px;
	right: 50px;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50px;
	background: #f4a506;
	z-index: 999;
	outline: 0;
	-webkit-box-shadow: 1px 0px 0px 5px rgba(244, 165, 6, 0.05);
	box-shadow: 1px 0px 0px 5px rgba(244, 165, 6, 0.05);
	cursor: pointer;
`;
