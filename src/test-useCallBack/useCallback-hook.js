import { useCallback, useMemo } from "react";
function UseCallbackHook() {
    let x = 123;
    let y = 456;
    let memoizedCallback = useCallback(
        () => {
            doSomething(x, y);
        },
        [x, y],
    );

    function doSomething(a, b) {
        return a + b;
    }


    let w = 100;
    let t = 456;
    let memoizedValue = useMemo(() => computeExpensiveValue(w, t), [w, t]);
    function computeExpensiveValue(a, b) {
        return a + b;
    }

    return (
        <>
            <header> 5. test useCallback hook</header>
            <p>return value {memoizedValue} from useMemo hook to optimize performance </p>
        </>
    );
}

export default UseCallbackHook;