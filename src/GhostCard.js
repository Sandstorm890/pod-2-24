import React from "react"

class GhostCard extends React.Component {

    state = {color: "red"}

    changeColor = (e) => {
        e.target.style.color = this.state.color
        if (this.state.color === "red") {
            this.setState({color: "black"})
        } else {
            this.setState({color: "red"})
        }
    }
    
    render() {

        return (
        <div>
            <h2 onClick={this.changeColor}>{this.props.name}</h2>
        </div>
        );
    }
}



export default GhostCard