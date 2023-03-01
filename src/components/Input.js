import { Component, useState } from "react"

//  const Input = (props) => (<input {...props} />)

 class Input extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <input {...this.props} />
        )
    }
 }

 export default Input