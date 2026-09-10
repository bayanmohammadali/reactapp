import React, {Component} from "react";

class TeamMember extends Component {

    render() {
        return(
            <div className="card m-3" style={{width: "18rem"}}>
                <img src={this.props.img} className="card-img-top" alt={this.props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.position}</p>
                    <p className="card-text">Phone: {this.props.phone}</p>
                    <p className="card-text">Email: {this.props.email}</p>
                    <p className="card-text">Website: {this.props.website}</p>
                </div>
            </div>
        )
    }
}

export default TeamMember   
