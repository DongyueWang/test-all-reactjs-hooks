import FancyInput from './FancyInput';
import { useRef } from 'react';

function FancyInputParent() {
    const inputRef = useRef();
    const onButtonClick = () => {
        // `current` fait référence au champ textuel monté dans le DOM
        inputRef.current.focus();
    };

    return (
        <>
            <header>7. test useImperativeHandle hook</header>
            <FancyInput ref={inputRef} />
            <button onClick={onButtonClick}>Donner le focus au FancyInput component 2</button>

        </>
    );
}

export default FancyInputParent;