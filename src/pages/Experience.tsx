import styled from 'styled-components'
import List from '../components/List';
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const MainHeader = styled.h3`
    font-size: calc(3px + 3vw);
`;

const MainHeader2 = styled.h4`
    font-size: calc(2px + 2vw);
    margin: 0;
    padding-left: 10px;
    
`;

const MainSubHeader = styled.h5`
    font-weight: bold;
    font-size: calc(1px + 1.5vw);
    margin: 0;
    padding-left: 10px;
`;

const StyledMain = styled.main`
    margin: 0 auto;
    align-items: flex-start;
    width: 70%;
`;

const ExperienceSection = styled.div`
    margin-bottom: 20px;
    text-align: left;
    padding: 0;
`;



export default function Experience() {

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

    const experience = [
        {
            company: "Claxton Heptburn Medical Center",
            role: "Shadowing",
            responsibilities: [
                "Shadowed professionals in Hospitalist, Cardiology, Oncology, and Psychological ward",
                "Contributed to formulating broad differential diagnosis",
                "Assisted in led discussions related to IRB proposals"
            ]
        },
        {
            company: "Hospital Of Special Surgery",
            role: "Patient Navigation",
            responsibilities: [
                "Offered clear and concise guidance to patients on navigating the healthcare facility",
                "Efficiently coordinated patient transportation using wheelchairs, ensuring comfort and safety",
                "Aided patients in the check-in process for appointments and surgical procedures"
            ]
        },
        {
            company: "Excellent Dumpling House",
            role: "Waiter",
            responsibilities: [
                "Organized orders in kitchen for dine-in and take-out",
                "Restocked inventory and assisted in preparations of food",
                "Bussed tables"
            ]
        }
    ];

    return (
        <StyledMain>
            <MainHeader>Experience</MainHeader>
            {experience.map((exp, index) => (
                <ExperienceSection key={index}>
                    <MainHeader2>{exp.company}</MainHeader2>
                    <MainSubHeader>{exp.role}</MainSubHeader>
                    <List items={exp.responsibilities} />
                </ExperienceSection>
            ))}
        </StyledMain>
    );
}