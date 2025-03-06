import styled from "styled-components";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    background: #D1A0F2;
    width: 30%;
    box-sizing: border-box;
    @media screen and (max-width: 750px) {
        width: 95vw;
        margin-top: 0;
    }
`
const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding-left: 0;
    width: 100%;
    font-size: calc(2px + 2.5vw);
   
    @media screen and (max-width: 750px) {
        flex-direction: row;
    }
`
const NavItem = styled.li`
    width: 80%;
    text-decoration: none;
    background: #E4C2F2;
    font-size: calc(2px + 2.5vw);
    border-radius: 15px;
    padding: 10px 0;
    margin: 20px 6px;
    text-align: center;
   

    @media screen and (max-width: 750px) {
        display: inline-block;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #9450F2;
    display: block;
    width: 100%;
    padding: 10px 0;
    
`;

export default function Navbar() {
    return (
        <Nav>
            <NavList>
                <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
                <NavItem><StyledLink to="/Education">Education</StyledLink></NavItem>
                <NavItem><StyledLink to="/Experience">Experience</StyledLink></NavItem>
                <NavItem><StyledLink to="/Research">Research</StyledLink></NavItem>
                <NavItem><StyledLink to="/Projects">Projects</StyledLink></NavItem>
                <NavItem><StyledLink to="/Skills">Skills</StyledLink></NavItem>
            </NavList>
        </Nav>
    );
}
