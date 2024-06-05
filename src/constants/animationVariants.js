/**
 * Base animation variant for a route page element (AboutPage, ExperiencesPage, ...)
 */
export const route_page_variant = {
    initial: {},
    animate: {
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
            damping: 15
        }
    }
};


/**
 * Animation variant for AboutPage Image
 */
export const about__page_self_image = {
    initial: {
        opacity: 0,
        scale: 0.3
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.7,
            type: "spring",
            damping: 15,
            ease: 'easeInOut'
        }
    }
}


/**
 * Animation variant for an AboutPage SkillGrid element
 */
export const about__page_skill_grid_variant = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
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
        scale: 0
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
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.7
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
            damping: 15
        }
    }
}


/**
 * Animation variant for a ContactPage ContentSection element
 */
export const contact__page_content_section_variant = {
    initial: {},
    animate: {
        transition: {
            ease: "easeIn",
            damping: 20,
            staggerChildren: 0.2,
        }
    }
}


/**
 * Animation variant for a ContactPage column element
 */
export const contact__page_column_variant = {
    initial: { x: "-200%" },
    animate: {
        x: "0%",
        transition: {
            ease: "easeIn",
            type: "spring",
            damping: 15,
        }
    }
}


/**
 * Animation variant for ProjectsPage ProjectCard to act as parent for ProjectCardOverlayDescription
 */
export const projects__page_project_card_variant = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.6,
            duration: 1.4,
            ease: "easeIn",
            type: "spring"
        }
    },
    hover: { }
}


/**
 * Animation variant for ProjectsPage ProjectCardOverlayDescription to allow visibility on hover
 */
export const projects__page_project_card_overlay_variant = {
    initial: {
        y: "100%",
        visibility: "hidden",
        transition: { duration: 0.6 }
    },
    animate: {
        y: "100%",
        visibility: "hidden",
        transition: { duration: 0.6 }
    },
    hover: {
        y: "0%",
        visibility: "visible",
        transition: { duration: 0.6 }
    }
}