import styled from "styled-components";
import { Link } from 'react-router-dom';

const FooterContainer = styled.p`
    background-color: #483C59;
    color: #9450F2;
    margin:0;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    list-style: none;
    color: #9450F2;
    
`

export default function Footer(){
    return(
        <FooterContainer>
            All Rights Reserved by Kelvin Fang
                <FooterLink to="/credit"> Credits &#169;</FooterLink>

        </FooterContainer>
    )
}