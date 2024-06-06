/**
 * Base animation variant for a route page element (AboutPage, ExperiencesPage, ...)
 */
export const route_page_variant = {
    initial: {},
    animate: {
        transition: {
            ease: "easeIn",
            staggerChildren: 0.3,
            type: "spring",
            when: "beforeChildren"
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
            duration: 1.4,
            ease: "easeIn",
            type: "spring"
        }
    }
};


/**
 * Animation variant for HomePage background
 */
export const home__page_background = {
    initial: { opacity: 0 },
    animate: { 
        opacity: 1,
        transition: {
            duration: 1.4
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
            duration: 2,
            ease: 'easeInOut',
            type: "spring"
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
            delayChildren: 0.9,
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
 * Animation variant for ProjectsPage ProjectCardList element
 */
export const projects__page_card_list_variant = {
    initial: {},
    animate: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.2
        }
    }
}


/**
 * Animation variant for ProjectsPage ProjectCard element as a wrapper to have two
 * separate animations occur on the element independently
 */
export const projects_page_project_card_entrance_variant = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.4,
            ease: "easeIn",
            type: "spring"
        }
    }
}


/**
 * Animation variant for ProjectsPage ProjectCard to act as parent for ProjectCardOverlayDescription
 */
export const projects__page_project_card_variant = {
    initial: {},
    hover: {}
}


/**
 * Animation variant for ProjectsPage ProjectCardOverlayDescription to allow visibility on hover
 */
export const projects__page_project_card_overlay_variant = {
    initial: {
        visibility: "hidden",
        y: "100%",
        transition: {
            duration: 0.4
        }
    },
    hover: {
        visibility: "visible",
        y: "0%",
        transition: {
            duration: 0.4
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
            delayChildren: 0.7,
            staggerChildren: 0.2
        }
    }
}


/**
 * Animation variant for an ExperiencesPageCardList card element
 */
export const experience__page_card_variant = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
            ease: "easeIn",
            type: "spring"
        }
    }
}


/**
 * Animation variant for a ContactPage ContentSection element
 */
export const contact__page_content_section_variant = {
    initial: { x: "-200%" },
    animate: {
        x: "0%",
        transition: {
            delayChildren: 0.7,
            duration: 1.4,
            ease: "easeIn",
            staggerChildren: 0.3,
            type: "spring"
        }
    }
}


/**
 * Animation variant for a ContactPage column element
 */
export const contact__page_column_variant = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: "easeIn",
            type: "spring"
        }
    }
}