class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello from {this.props.framework}!</h1>
            </div>
        );
    }
}