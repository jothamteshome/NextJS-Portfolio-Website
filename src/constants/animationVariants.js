/**
 * Base animation variant for a route page element (AboutPage, ExperiencesPage, ...)
 */
export const route_page_variant = {
    initial: { x: "0%" },
    animate: {
        x: "0%",
        transition: {
            ease: "easeIn",
            type: "spring",
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    },

};

/**
 * Base animation variant for a `ContentSection` element
 */
export const content_section_variant = {
    initial: { x: "-200%" },
    animate: { x: "0%" }
};


/**
 * Animation variant for an AboutPage `SkillGrid`
 */
export const about__page_skill_grid_variant = {
    initial: { opacity: 1 },
    animate: {
        opacity: 1,
        transition: { staggerChildren: 0.1, when: "beforeChildren" }
    }
};


/**
 * Animation variant for an AboutPage `SkillCard` element
 */
export const about__page_skill_card_variant = {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeIn",
            type: "spring"
        }
    }
}