import styled from 'styled-components'
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import me from "../public/ME.jpg";


const MainHeader = styled.h3`
    font-size: calc(3px + 3vw);
`;

const StyledMain = styled.main`
    margin: 0 auto;
    align-items: center;
    width: 70%;
`;

const MainWord = styled.p`
    padding-top: 20px;
    font-size: calc(2px + 2vw);
    @media screen and (max-width: 750px) {
        font-size: calc(3px + 3vw);
       
    }

`;

const Image = styled.img`
    max-width: 70%;
    max-height: 70%;
`;

export default function Home(){

    const currentPath = useParams();
    let lastValue = Object.values(currentPath).pop() || "**";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);

    useEffect(() => {
        if (lastValue === "**") {
            document.title = "Home | Resume";
        } else {
            document.title = `${lastValue} | Resume`;
        }
    }, [lastValue]);

    return (
       <StyledMain>
           <MainHeader>Home</MainHeader>
           <Image src={me}></Image>
           <MainWord> Hello! Welcome to my Website! You will find everything you will need to know about me.</MainWord>
           <MainWord>A Boston University senior and aspiring oncologist with a goal of working in and exploring the medical field.
               Hardworking, organized, and a strong desire to learn and improve skills.
               Significant experience in experimental design and exceptional computer skills.
           </MainWord>


       </StyledMain>
    )
}