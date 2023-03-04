import { Component } from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Hello'
        }
        this.handleUpdate.bind()
    }

    componentDidMount() {
        console.log('mount')
    }

    componentDidUpdate() {
        console.log('update')
    }

    componentDidUnmount() {
        console.log('unmount')
    }

    render() {
        return (
            <h1>{this.state.value}</h1>
        )
    }
}