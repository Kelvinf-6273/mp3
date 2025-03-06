
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer  from './components/Footer';
import Header from './components/Header';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    padding-right:  10px;
    flex-direction:row;
    min-height: 210vh;
    background-color: #9450F2;
    box-sizing: border-box;
    padding-bottom: 0;
    @media screen and (max-width: 750px) {
            
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 150vh;
    }

`;
function Root() {
    return (
        <div>
            <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience/>} />
                    <Route path="/research" element={<Research/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/skills" element={<Skills/>} />

                </Routes>
            </Container>
            <Footer/>

        </div>
    );

}


const router = createBrowserRouter([{ path: '*', Component: Root}]);
export default function App() {

    return <RouterProvider router={router} />
}

