import styled from 'styled-components';
import List from '../components/List';
import Calculator from '../components/Calculator'
import {useParams} from "react-router-dom";
import {useEffect} from "react";

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

const ProjectSection = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

const projects = [
    {
        title: "UROP",
        items: [
            "Use of deep learning models (nnU-Net)",
            "Use of pipelines",
            "Use of virtual machines",
            "Use of programs such as ITK-Snap and MatLAB"
        ]
    },
    {
        title: "CS103 For Dummies",
        items: [
            "How-to guide for basic coding in CS103",
            "Created Windows Operating System using React and JS",
            "Implemented carousels",
            "Implemented CSS, HTML, JS, and React"
        ]
    }
];

export default function Projects() {

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
            <MainHeader>Projects</MainHeader>
            {projects.map((project, index) => (
                <ProjectSection key={index}>
                    <MainHeader2>{project.title}</MainHeader2>
                    <List items={project.items} />
                </ProjectSection>
            ))}
            <Calculator />
        </StyledMain>
    );
}
