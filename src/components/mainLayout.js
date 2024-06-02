"use client"
import 'bootstrap/dist/css/bootstrap.min.css';

import { navigationRoutes } from '@/constants';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';


const CustomNavigation = function() {
    return (
        <Navbar expand="lg" className="bg-dark-subtle">
            <Container fluid>
                <Navbar.Brand href="/">Jotham Teshome</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        {
                            navigationRoutes.map((navigation, i) => (
                                <Nav.Link key={i} href={navigation.route}>{navigation.name}</Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const MainLayout = function({ children }) {
    return (
        <html lang="en" data-bs-theme="dark">
            <Stack as="body">
                <CustomNavigation></CustomNavigation>
                <Container as="main" className='flex-grow-1 bg-body' fluid>
                    {children}
                </Container>
            </Stack>
        </html>
    );
};

export default MainLayout;