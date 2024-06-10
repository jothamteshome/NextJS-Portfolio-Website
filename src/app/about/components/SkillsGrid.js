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
            <Card className={`bg-body-tertiary ${styles.skill_card}`}>
                <Row className='w-100 mx-auto justify-content-around'>
                    <Col className='d-flex flex-column align-items-center justify-content-center px-0' xs={4}>
                        <Card.Img className={` ${styles.icon}`} src={skill.icon} alt={`Icon for ${skill.name}`} />
                    </Col>
                    <Col xs={7} className='p-0'>
                        <Card.Body className={`d-flex align-items-center justify-content-center px-0 ${styles.skill_card_footer}`}>
                            <p className='mb-0 text-body text-center'>{skill.name}</p>
                        </Card.Body>
                    </Col>
                </Row>
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
            <div className={styles.skill_grid}>
                {
                    skills.map((skill, i) => (
                        <SkillCard key={i} skill={skill} />
                    ))
                }
            </div>
        </motion.div>
    );
};

export default SkillsGrid;