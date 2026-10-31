import { Component } from "react";

export default class ClassComponent extends Component {
    
    constructor(props) {
        super(props);
        // initial state
        this.state = {
            // count state
            count: 0
        };
    }

    componentDidMount() {
        console.log('ClassComponent is ready...');
    }

    componentDidUpdate() {
        if(this.state.count === 10) {
            this.props.onDelete();   
        }
    }
    
    componentWillUnmount() {
        console.log('Component exit ->[]');
    }


    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increase</button>
            </>
        )
    }

}

