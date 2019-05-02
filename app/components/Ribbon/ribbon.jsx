class Ribbon extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("ribbon mounted!")
    }

    render() {
        return (
            <div id="ribbon">
                <h1>ribbon placeholder {this.props.bob}!</h1>
            </div>
        );
    }
}