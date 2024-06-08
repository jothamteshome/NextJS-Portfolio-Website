import "@/styles/main.css";
import "@/styles/global.css";

import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/NavigationBar";
import Stack from 'react-bootstrap/Stack';

export const metadata = {
  title: "Jotham Teshome",
  description: "Welcome to Jotham's Portfolio Website. Here you can find a variety of projects I have worked on, as well as the different skills and technologies I know. Please feel free to reach out to discuss more!",
  keywords: ['next.js 14','portfolio', 'app', 'react', 'bootstrap', 'javascript', 'css'],
};


/**
 * The root layout for the website
 * @param {object} props - The props object 
 * @param {JSX.Element} props.children - The future child elements of the current root layout
 * @returns {JSX.Element} Returns the root layout for the website
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark-blue">
      <Stack as="body">
        <NavigationBar />
        <Container as="main" className='bg-body' fluid>
          {children}
        </Container>
      </Stack>
    </html>
  )
};
