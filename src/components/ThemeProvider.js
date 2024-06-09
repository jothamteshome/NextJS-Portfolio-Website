"use client"
import { useState, useEffect } from 'react';

import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/NavigationBar";
import Stack from 'react-bootstrap/Stack';


/**
 * An element to handle the theme of the page when it is toggled using the switch
 * @param {object} props - The props object
 * @param {JSX.Element} props.children - The future children of this component 
 * @returns {JSX.Element} Returns a Stack element containing the entire body of the website
 */
const ThemeProvider = function ({ children }) {
    // Set the current state of the document to use the stored theme if it exists
    // otherwise default to dark-blue
    const [theme, setTheme] = useState('dark-blue');

    // Set the attribute of the body element to be the same as currently toggled theme
    // and store the value locally
    useEffect(() => {
        setTheme(() => {
            return localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark-blue';
        })

        document.getElementsByTagName('body')[0].setAttribute('data-bs-theme', theme);

        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <Stack as="body" data-bs-theme="dark-blue">
            <NavigationBar theme={theme} setTheme={setTheme} />
            <Container as="main" className='bg-body' fluid>
                {children}
            </Container>
        </Stack>
    );
};

export default ThemeProvider;