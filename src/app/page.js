"use client"
import styles from "./page.module.css";

import { home__page_background } from "@/constants/animationVariants";
import { socialMediaLinks, importantFiles, icons } from "@/constants/profileConstants";

import { useEffect } from 'react'
import { motion } from 'framer-motion';
import { ThpaceGL } from "thpace";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import SocialMediaIcon from "@/components/SocialMediaIcon";




const TriangleBackground = function ({ children }) {
    const settings = {
        colors: ['#000000', '#19183c', '#681884'],
        triangleSize: 100,
        maxFps: 30,
        particleSettings: {

        }
    }

    useEffect(() => {
        const canvas = document.getElementById('triangleBackground');
        ThpaceGL.create(canvas, settings);
    })
    return (
        <motion.div className={styles.background}
            variants={home__page_background}
            initial="initial"
            animate="animate">
            {children}
            <canvas id="triangleBackground" className={styles.background} />
        </motion.div>
    );
};


/**
 * Represents a row of social media link icons
 * @returns {JSX.Element} Returns a row containing social media links and resume icons
 * that are styled for the home page
 */
const HomeContainerLinks = function () {
    return (
        <Row className={`${styles.media_icons} d-flex justify-content-around`} xs="auto" >
            {
                socialMediaLinks.map((link, i) => (
                    <Col key={i}>
                        <a href={link.url} target="_blank" title={link.title} download={link.download ? link.download : false}>
                            <SocialMediaIcon link={link} />
                        </a>
                    </Col>
                ))
            }
        </Row>
    );
};


const HomePageContainer = function () {
    const home_image = importantFiles.images.home_image;
    return (
        <Container className={`m-0 ${styles.content_overlay} d-flex align-items-center justify-content-center`} fluid>
            <div className="d-flex flex-column align-items-center justify-content-center h-50">
                <div className={`border border-primary-subtle border-3 bg-body-tertiary opacity-75 ${styles.image_background}`}>
                    <Image alt={home_image.alt} src={home_image.src} className={styles.image} />
                </div>

                <h1 className="mt-2 fw-bold">Hi, I&apos;m Jotham</h1>
                <HomeContainerLinks/>


            </div>
        </Container>

    );
};


const HomePage = function () {
    return (
        <TriangleBackground>
            <HomePageContainer />
        </TriangleBackground>

    );
};

export default HomePage;