import { useRef, useImperativeHandle, forwardRef } from 'react';
function FancyInput(props, ref) {
    const inputRef = useRef();
    const inputRef2 = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef2.current.focus();
        }
    }));

    return (
        <>
            <input ref={inputRef} />
            <input ref={inputRef2} />
        </>
    );
}
FancyInput = forwardRef(FancyInput);
export default FancyInput;