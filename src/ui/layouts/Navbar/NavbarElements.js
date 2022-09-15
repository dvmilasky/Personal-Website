import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #ffffff;
border-bottom: 2px solid black;
height: 115px;
display: flex;
justify-content: space-between;
padding: 0 10rem;
z-index: 12;
`;

export const Logo = styled.img`
	height: 115px;
	width: 140px;
	padding: 0 0;
	margin: 0 0;
`;

export const NavLink = styled(Link)`
color: #949494;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: black;
	font-weight: bold
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: left;
margin: 0 0;
padding: 0 0;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
