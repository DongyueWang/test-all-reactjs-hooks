import './Todos.css';
import React, { useState } from 'react';
import todosReducer from './todosReducer';
import useCustomerReducer from './useCustomerReducer';

function Todos() {
    const [nextAction, setNextAction] = useState('nextAction0');
    const [todos, dispatchRedux] = useCustomerReducer(todosReducer, { text: 'nextAction0', completed: false });

    function handleAddClick(text) {
        dispatchRedux({ type: 'add', text });
    }

    function handleText(e) {
        setNextAction(e.target.value);
    }
    return (
        <div className="Todo">
            <header> 2. Test customer Hook</header>
            <p>what is your next action ?</p>
            <input type='text' value={nextAction}
                onBlur={() => handleAddClick(nextAction)}
                onChange={handleText} />
            <button id='confirmButton' onClick={() => handleAddClick(nextAction)}>
                confirm your next action
            </button>
            <p>Your next action will be "{todos.text}"  </p>
        </div>
    );
}

export default Todos;