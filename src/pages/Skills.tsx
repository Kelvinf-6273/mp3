import styled from 'styled-components';
import List from '../components/List';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MainHeader = styled.h3`
    font-size: calc(2rem + 2vw);
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
`;

const MainHeader2 = styled.h4`
    font-size: calc(2px + 2vw);
    margin: 0;
    padding-left: 10px;
`;

const StyledMain = styled.main`
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ColumnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Column = styled.div`
    width: 48%;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const SkillsSection = styled.div`
    margin-bottom: 15px;
    text-align: left;
`;

export default function SkillsAndExtracurricular() {

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

    const skillsAndExtracurricular = [
        {
            category: "Programming Languages",
            items: ["Python", "Java", "C#", "HTML", "CSS", "JavaScript", "React"]
        },
        {
            category: "Volunteering",
            items: ["Boston Rescue Mission", "Red Cross Boston Food Pantry", "Kidney Disease Screening"]
        },
        {
            category: "Languages",
            items: ["Cantonese", "Mandarin", "English"]
        },
        {
            category: "Hobbies",
            items: ["Weightlifting", "Gaming", "PC building"]
        }
    ];

    return (
        <StyledMain>
            <MainHeader>Skills and Extracurricular</MainHeader>
            <ColumnsContainer>
                <Column>
                    {skillsAndExtracurricular.map((section, index) =>
                            index < 2 && (
                                <SkillsSection key={index}>
                                    <MainHeader2>{section.category}</MainHeader2>
                                    <List items={section.items} />
                                </SkillsSection>
                            )
                    )}
                </Column>
                <Column>
                    {skillsAndExtracurricular.map((section, index) =>
                            index >= 2 && (
                                <SkillsSection key={index}>
                                    <MainHeader2>{section.category}</MainHeader2>
                                    <List items={section.items} />
                                </SkillsSection>
                            )
                    )}
                </Column>
            </ColumnsContainer>
        </StyledMain>
    );
}
