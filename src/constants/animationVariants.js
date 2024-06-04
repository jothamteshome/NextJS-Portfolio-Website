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
 * Base animation variant for a ContentSection element
 */
export const content_section_variant = {
    initial: { x: "-200%" },
    animate: {
        x: "0%",
        transition: {
            type: "spring",
            damping: 12
        }
    }
};


/**
 * Animation variant for AboutPage ContentSection element
 */
export const about__page_content_section_variant = {
    initial: { y: "-200%" },
    animate: {
        y: "0%",
        transition: {
            type: "spring",
            damping: 12
        }
    }
}


/**
 * Animation variant for an AboutPage SkillGrid element
 */
export const about__page_skill_grid_variant = {
    initial: { opacity: 1 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};


/**
 * Animation variant for an AboutPage SkillCard element
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


/**
 * Animation variant for an ExperiencePage ExperiencesPageCardList element
 */
export const experience__page_card_list_variant = {
    initial: { x: "0%" },
    animate: {
        x: "0%",
        transition: {
            staggerChildren: 0.2
        }
    }
}


/**
 * Animation variant for an ExperiencesPageCardList card element
 */
export const experience__page_card_variant = {
    initial: { x: "-200%" },
    animate: {
        x: "0%",
        transition: {
            ease: "easeIn",
            type: "spring",
            damping: 12
        }
    }
}