import Form from 'react-bootstrap/Form';

/**
 * Represents the switch toggling element in the navbar
 * @param {object} props - The props object
 * @param {string} props.theme - The current state for the theme of the page
 * @param {Dispatch<SetStateAction<string>>} props.setTheme - The state setter for the current theme 
 * @returns {JSX.Element} Returns a Form with a switch element
 */
const ThemeSwitch = function ({ theme, setTheme }) {
    // Toggles the theme between dark-blue and vanilla
    const toggleTheme = () => theme === "dark-blue" ? setTheme('vanilla') : setTheme('dark-blue');

    return (
        <Form>
            <Form.Switch id="theme-switch" onClick={toggleTheme} defaultChecked={theme === "vanilla" ? true : false}/>
        </Form>
    );
};

export default ThemeSwitch;