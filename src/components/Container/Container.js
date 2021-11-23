import React, { useEffect, useState } from 'react';
import AddCast from '../AddCast/AddCast';
import CastCrew from '../CastCrew/CastCrew';
import Team from '../Team/Team';
import './Container.css';
const Container = () => {
    // for components under Container component
    const [casts,setCasts] = useState([]);
    const[team,setTeam] = useState([]); 
    //fetch data from JSON file 
    useEffect(()=>{
        fetch('./movieCastCrew.JSON')
            .then(res=>res.json())
            .then(data=> setCasts(data));
    }, [])
    // handle Team component
    const handleAddToTeam = (cast) =>{
        const newTeam =[...team,cast];
        setTeam(newTeam);
    }
    return (
        <div className="container-fluid">
           <div className="row d-flex">
                <div className="col-md-9 ">
                        <div className="row d-flex g-3">
                            {
                                casts.map(cast=><CastCrew  key={cast.id} handleAddToTeam={handleAddToTeam} cast ={cast}></CastCrew>)
                            }
                        </div>             
                </div> 
                <div className="col-md-3 mt-4 ">
                    <div>
                        <Team team={team}></Team>          
                    </div>
                    <div>
                         {
                            team.map(cast=><AddCast key={cast.id} name={cast.name}></AddCast>)
                         }  
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Container;