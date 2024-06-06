"use client"
import styles from '../about_page.module.css'

import {
    about__page_skill_card_variant,
    about__page_skill_grid_variant,
} from '@/constants/animationVariants';

import { skills } from '@/constants/profileConstants';
import { motion } from 'framer-motion';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


/**
 * Represents a card containing a skill's name and icon
 * @param {object} props - The prop object
 * @param {object} props.skill - The skill containing a name and icon 
 * @returns {JSX.Element} A card element to display a skill's name and icon
 */
const SkillCard = function ({ skill }) {
    return (
        <motion.div variants={about__page_skill_card_variant}>
            <Card className={`bg-body-secondary ${styles.skill_card}`}>
                <Card.Img className={styles.icon} src={skill.icon} alt={`Icon for ${skill.name}`} />
                <Card.Footer className={`d-flex align-items-center justify-content-center ${styles.skill_card_footer}`}>
                    <p className='mb-0 text-body text-center'>{skill.name}</p>
                </Card.Footer>
            </Card>
        </motion.div>
    );
};


/**
 * Represents a grid containing multiple SkillCard elements
 * @returns {JSX.Element} A Row element to display multiple skills in a grid
 */
const SkillsGrid = function () {
    return (
        <motion.div variants={about__page_skill_grid_variant}>
            <Row className="gy-5" xxl={6} xl={5} lg={4} md={3} sm={2} xs={2}>
                {
                    skills.map((skill, i) => (
                        <Col key={i} className='d-flex justify-content-center'>
                            <SkillCard key={i} skill={skill} />
                        </Col>
                    ))
                }
            </Row>
        </motion.div>
    );
};

export default SkillsGrid;