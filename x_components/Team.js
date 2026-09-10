import React,{Component} from "react";  
import TeamMember from "./TeamMember";

class Team extends Component {
constructor() {
        super();
        this.state = {
            memberInfo : [
                    { id: 1, img: '/images/photo1.jpg', name: 'Bayan', position: 'Front-End Developer' },
                    { id: 2, img: '/images/photo2.jpg', name: 'Ali', position: 'Back-End Developer'},
                    { id: 3, img: '/images/photo3.jpg', name: 'Ahmed', position: 'Full-Stack Developer' },
                    { id: 4, img: '/images/photo4.jpg', name: 'Sara', position: 'UI/UX Designer' },
            ]

    }
}

mapping(x) {
    const member = x.map((member) => (
        <TeamMember
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
        />
    ))
    return member
}
    render() {

        return(
            <div className="row">
                {this.mapping(this.state.memberInfo)}
            </div>

        )
    }
}
export default Team 