import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const value = e.target.elements.option.value.trim();
        const error = this.props.addOption(value);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>this.state.error</p>}
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                >
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}