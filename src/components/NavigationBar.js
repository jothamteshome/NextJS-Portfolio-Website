"use client"
import { navigationRoutes } from '@/constants/profileConstants';

import { usePathname } from 'next/navigation';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeSwitch from "@/components/ThemeSwitch";


/**
 * Represents the navigation bar displayed at the top of the page
 * @returns {JSX.Element} Returns a Navbar element containing the navigation links for the website
 */
const NavigationBar = function () {
    // Get the pathname for the current page
    const pathname = usePathname();

    return (
        <Navbar fixed="top" expand="lg" className="bg-dark-subtle px-2" as="nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav variant="underline" activeKey={pathname}>
                    {
                        navigationRoutes.map((navigation, i) => (
                            <Nav.Link key={i} eventKey={navigation.route}
                                className="fs-5"
                                href={navigation.route}>{navigation.name}</Nav.Link>
                        ))
                    }
                </Nav>
            </Navbar.Collapse>
            <ThemeSwitch />
        </Navbar>
    );
};

export default NavigationBar;