class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handlePickAnOption = this.handlePickAnOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.removeOption = this.removeOption.bind(this);
    }

    handlePickAnOption() {
        const length = this.state.options.length;
        const index = Math.floor(Math.random() * length);
        const value = this.state.options[index];
        alert(value);
    }

    removeOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter((option => option !== optionToRemove)) }))
    }

    addOption(option) {
        const options = JSON.parse(JSON.stringify(this.state.options));
        options.push(option);
        this.setState(() => ({ options: options }));
    }

    removeAll() {
        this.setState(() => ({ options: [] }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
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
                    removeAll={this.removeAll}
                    isDisabled={this.state.options.length == 0 ? true : false}
                />
                <Options options={this.state.options} removeOption={this.removeOption} />
                <AddOption addOption={this.addOption} />
            </div>
        )
    }
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
};

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life on the hands of a computer.'
};



const Actions = (props) => {
    return (
        <div>
            <button disabled={props.isDisabled} onClick={props.handlePickAnOption}>What do I do?</button>
            <button onClick={props.removeAll}>Remove all</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {props.options.length > 0 &&
                props.options.map((option) => <Option key={option} option={option} removeOption={props.removeOption} />)
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            <span>{props.option}</span>
            <button
                onClick={(e) => {
                    props.removeOption(props.option);
                }}>
                remove
            </button>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
