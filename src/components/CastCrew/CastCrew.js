import React from 'react';
import './CastCrew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CastCrew = (props) => {
    // destructuring
     const{name,img,salary,characterName,role,age} = props.cast;

    return (
        // cast members component code
        <div className="col-12 col-md-6 col-lg-4">
            <div class="card border bg-light mt-5 mx-4 mb-3 rounded h-100 w-100 shadow" > 
                <img height="250px" width="250px" src={img} className="card-img-top p-2 rounded-2" alt="..."/>
                <div className="card-body">
                <h5 className="card-title"><span className="text-secondary fw-semibold fs-5">Name: </span>{name}</h5>
                <h6 className="card-text"><span className="text-secondary fw-semibold fs-6">Role: </span>{role}</h6>
                <h6 className="card-text"><span className="text-secondary fw-semibold fs-6">Character: </span>{characterName}</h6>
                <h6 className="card-text"><span className="text-secondary fw-semibold fs-6">Age: </span>{age}</h6>
                <h6 className="card-text"><span className="text-secondary fw-semibold fs-6">Salary: </span>{salary}</h6>
                {/* button */}
                <button onClick={()=> props.handleAddToTeam(props.cast)} className="btn btn-color mt-3"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cast</button>
                
                </div>  
            </div>
        </div>
        
    );
};

export default CastCrew;