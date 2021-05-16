import React, { useContext } from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{
            background: theme.background,
            color: theme.foreground
        }}>
            Je suis stylé par le contexte de thème !
        </button>

    )
}

export default ThemedButton;
export { ThemeContext, themes };
