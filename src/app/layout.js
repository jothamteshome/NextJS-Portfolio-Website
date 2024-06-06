import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Script from "next/script";

import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/NavigationBar";
import Stack from 'react-bootstrap/Stack';

export const metadata = {
  title: "Jotham Teshome",
  description: "Jotham Teshome's portfolio website to show off all the projects he's worked on. Build with Next.js, React, and Bootstrap",
  keywords: ['Next.js', 'React', 'Bootstrap', 'Javascript'],
  icons: {
    icon: '/images/jotham-teshome.jpg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <Stack as="body">
        <NavigationBar />
        <Container as="main" className='bg-body' fluid>
          {children}
        </Container>
        <footer className='bg-dark-subtle d-flex justify-content-center 
      align-items-center mt-auto'>Made by Jotham Teshome</footer>
      </Stack>
    </html>
  )
};
