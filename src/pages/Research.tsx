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

const ResearchSection = styled.div`
    margin-bottom: 20px;
    text-align: left;
    padding: 0;
`;

export default function Research() {

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

    const researchExperience = [
        {
            company: "Boston University Aphasia Research Laboratory",
            role: "Research Assistant",
            responsibilities: [
                "Analyzed fMRI and MRI scans using FreeSurfer for lesion analysis",
                "Developed and optimized research methodologies utilizing FreeSurfer software",
                "Collaborated closely with research staff to develop reliable lesion analysis method"
            ]
        },
        {
            company: "Boston University Aphasia Research Laboratory",
            role: "UROP Researcher",
            responsibilities: [
                "Conducted MRI segmentation using ITK-Snap and nnU-Net to improve accuracy",
                "Optimized nnU-Net performance for medical image analysis",
                "Applied computational techniques to enhance medical imaging research"
            ]
        }
    ];

    return (
        <StyledMain>
            <MainHeader>Research</MainHeader>
            {researchExperience.map((exp, index) => (
                <ResearchSection key={index}>
                    <MainHeader2>{exp.company}</MainHeader2>
                    <MainSubHeader>{exp.role}</MainSubHeader>
                    <List items={exp.responsibilities} />
                </ResearchSection>
            ))}
        </StyledMain>
    );
}

