import React from 'react';
import './Team.css';
const Team = (props) => {
    const {team} = props;
    //reduce technique
    const totalReducer =(previous,cast) => previous + cast.salary; 
    const total = team.reduce(totalReducer, 0);
    return (
        <div className="mt-4 pt-4 border ms-4 bg-color">
             <h3>Team Zootopia</h3>
            <h5> Cast Added: {props.team.length}</h5>
            <p>Total: ${total}</p>
        </div>

      
    );
};

export default Team;