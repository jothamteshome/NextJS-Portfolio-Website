"use client"
import 'bootstrap/dist/css/bootstrap.min.css';

import { navigationRoutes } from '@/constants';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';


const NavigationBar = function() {
    return (
        <Navbar fixed="top" expand="lg" className="main_layout_navbar bg-dark-subtle">
            <Container fluid>
                <Navbar.Brand href="/" className='fs-3'>Jotham Teshome</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            navigationRoutes.map((navigation, i) => (
                                <Nav.Link key={i} className="fs-5" href={navigation.route}>{navigation.name}</Nav.Link>
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
                <NavigationBar/>
                <Container as="main" className='bg-body' fluid>
                    {children}
                </Container>
            </Stack>
        </html>
    );
};

export default MainLayout;