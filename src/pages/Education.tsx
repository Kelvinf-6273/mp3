import styled from 'styled-components'
import List from '../components/List';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MainHeader = styled.h3`
    font-size: calc(3px + 3vw);
`;

const MainSubHeader = styled.em`
    font-weight: bold;
    font-size: calc(2px + 2vw);

`

const StyledMain = styled.main`
    margin: 0 auto;
    align-items: center;
    width: 70%;
`;




export default function Education() {
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


    const courses = [
        "Biology II",
        "Cellular Biology",
        "System Physiology",
        "Chemistry I & II",
        "Organic Chemistry I & II",
        "Biochemistry",
        "Physics I & II",
        "Python",
        "Java",
        "C#",
        "Geometric Algorithms",
        "Web Programming",
        "Web App Development"
    ];

    return (
        <StyledMain>
            <MainHeader>Education</MainHeader>
            <MainSubHeader>Bachelor of Science: Major in Biology, Minor in Computer Science 2025</MainSubHeader>
            <List items={courses} />
        </StyledMain>
    );
}