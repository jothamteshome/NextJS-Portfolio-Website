"use client"
import Image from 'react-bootstrap/Image';

/**
 * Represents an icon link to a social media site
 * @param {object} props - The props object
 * @param {object} props.link - An object containing information about my social media links 
 * @returns A div containing an icon that links to a given social media site
 */
const SocialMediaIcon = function ({ link }) {
    return (
        <div style={{backgroundColor: link.bg_color}} className="social-media-icon rounded-2">
            <Image alt={`Icon representing ${link.name} `} className="p-1 w-100" src={link.icon} />
        </div>
    );
};

export default SocialMediaIcon;