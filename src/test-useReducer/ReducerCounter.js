import countReducer from './countReducer';
import { useReducer } from 'react';

const initialState = { count: 0 };
const initialCount = 0;
function ReducerCounter() {
    const [state, dispatch] = useReducer(countReducer, initialState);
    return (
        <>
            <header>4. test useReducer Hook</header>
            Total: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                Réinitialiser
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                -
            </button>
            <button onClick={() => dispatch({ type: 'increment' })}>
                +
            </button>
        </>
    )
}

export default ReducerCounter;