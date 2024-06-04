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
 * Animation variant for an ContactPage ContentSection element
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
 * Animation variant for an ContactPage FormLayout element
 */
export const contact__page_form_variant = {
    initial: { x: "-200%" },
    animate: {
        x: "0%",
        transition: {
            ease: "easeIn",
            type: "spring",
            damping: 15,
            delay: 0.6
        }
    }
}


/**
 * Animation variant for an ContactPage ContactInfo element
 */
export const contact__page_contact_info_variant = {
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