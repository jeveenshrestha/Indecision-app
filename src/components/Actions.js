import React from 'react';

const Actions = (props) => (
    <div>
        <button
            disabled={props.isDisabled}
            onClick={props.handlePickAnOption}
        >What do I do?
        </button>
    </div>
);

export default Actions;