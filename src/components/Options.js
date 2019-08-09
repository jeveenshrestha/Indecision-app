import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.removeAll}>RemoveAll</button>
        {props.options.length === 0 && <p>Please add an option to get stated!</p>}
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    option={option}
                    removeOption={props.removeOption}
                />
            ))
        }
    </div>
);

export default Options;