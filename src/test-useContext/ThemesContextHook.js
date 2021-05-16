import { ThemeContext, themes } from './ThemedButton';
import Toolbar from './Toolbar';

function ThemesContextHook() {

    return (
        <ThemeContext.Provider value={themes.light}>
            <Toolbar />
        </ThemeContext.Provider>
        
    )
}

export default ThemesContextHook;
