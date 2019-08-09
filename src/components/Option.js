import React from 'react';

const Option = (props) => (
    <div>
        <span>{props.option}</span>
        <button
            onClick={(e) => {
                props.removeOption(props.option);
            }}>
            remove
        </button>
    </div>
);

export default Option;