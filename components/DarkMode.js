import React, { useEffect } from "react";

const DarkMode = () => {
    useEffect(() => {
        const selectedTheme = window.localStorage.getItem('selectedTheme');
        if (selectedTheme === 'dark'){
            setDarkMode();
        }
    }, []);

    const setDarkMode = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            document.querySelector('body').setAttribute('data-theme', 'dark');
            window.localStorage.setItem('selectedTheme', 'dark');
        }
    }

    const setLightMode = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            document.querySelector('body').setAttribute('data-theme', 'light');
            window.localStorage.setItem('selectedTheme', 'light');
        }
    }

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }

    return (
        <div className='dark_mode container-fluid'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('selectedTheme') === 'dark'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src="/Sun.png" className="sun" alt="Sun"/>
                <img src="/Moon.png" className="moon" alt="Moon"/>
            </label>
        </div>
    );
};

export default DarkMode;
