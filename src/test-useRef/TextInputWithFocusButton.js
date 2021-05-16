import { useRef } from 'react';

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` fait référence au champ textuel monté dans le DOM
        inputEl.current.focus();
    };
    return (
        <>
            <header>6. Test useRef hook </header>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Donner le focus au champ</button>
        </>
    );
}

export default TextInputWithFocusButton;