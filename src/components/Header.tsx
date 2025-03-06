
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #483C59;
    width: 100%;
    text-align: left;
    margin: 0;
    box-sizing : border-box;
    padding: 10px 15px;
    @media screen and (max-width: 750px) {
        text-align: center; 
        
    }
`;
const Title = styled.h1`
    color: #9450F2;
    @media screen and (max-width: 750px) {
        text-align: center;

    }
`;

const SubTitle = styled.p`
    color: #9450F2;
    margin: 0;
    padding-left: 10px;
    font-size: calc(2px + 2vw);
   
    @media screen and (max-width: 750px) {
        text-align: center;

    }
`;

export default function Header(){
    return(
        <StyledHeader>
            <Title>Kelvin Fang</Title>
            <SubTitle>My Online Resume</SubTitle>
        </StyledHeader>
    )
}
