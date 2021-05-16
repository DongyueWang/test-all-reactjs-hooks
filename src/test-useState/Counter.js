import React, { useState, useEffect } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {

        // ChatAPI.subscribeToFriendStatus(props.friend.id,
        //     handleStatusChange);

        return () => {
            // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        }
    });

    useEffect(() => {
        document.title = `Vous avez cliqué ${count}`
    });

    return (
        <div>
            <header> 1. Test useState hook</header>
            <p>Vous avez cliqué {count} fois </p>
            <button onClick={() => setCount(count + 1)}>
                Cliquez ici
            </button>
        </div>
    );
}

export default Counter