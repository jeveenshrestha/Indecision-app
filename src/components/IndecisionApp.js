import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handlePickAnOption = () => {
        const length = this.state.options.length;
        const index = Math.floor(Math.random() * length);
        const value = this.state.options[index];
        this.setState(() => ({ selectedOption: value }));
    };

    closeModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    removeOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option => option !== optionToRemove)) }))
    };

    addOption = (option) => {
        const options = JSON.parse(JSON.stringify(this.state.options));
        if (option) {
            options.push(option);
            this.setState(() => ({ options: options }));
        }
    };

    removeAll = () => {
        this.setState(() => ({ options: [] }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Actions
                    handlePickAnOption={this.handlePickAnOption}
                    isDisabled={this.state.options.length == 0 ? true : false}
                />
                <Options
                    options={this.state.options}
                    removeOption={this.removeOption}
                    removeAll={this.removeAll}
                />
                <AddOption 
                    addOption={this.addOption} 
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        )
    }
};