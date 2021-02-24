import React from "react"
import GhostCard from "./GhostCard"
const baseURl = "http://localhost:3000/ghosts"


class GhostContainer extends React.Component {
    
    state = {ghosts: []}

    componentDidMount() {
        fetch(baseURl)
        .then(r => r.json())
        .then(json => 
            this.setState({ghosts: json["data"]})    
        )
    }

    makeCards() {
        return this.state.ghosts.map((ghost) => {
            console.log(ghost)
            return (
                <GhostCard name={ghost.attributes.name} />
            )
        })
    }

    render() {
        return (
            <div>
                <GhostCard />
                {this.makeCards()}
            </div>
        );
    }
}

export default GhostContainer