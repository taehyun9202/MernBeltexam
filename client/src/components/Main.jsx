import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Main = props => {
    const [pets, setPets] = useState([]);
    const fetchActivities = () =>{
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
            .catch(err =>console.log(err));
    }

    useEffect(()=>{
        fetchActivities();
    },[])

    return (
        <div className="columns" style={{padding:"40px"}}>
        <div className="column">
            <Link to="/new" className="subtitle"><a>Add a pet to the Shelter!</a></Link>
            <div class="table-container">
                    <table class="table is-fullwidth">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pets.map(a =>
                        <tr key = {a._id}>
                            <td>{a.name}</td>
                            <td>{a.type}</td>
                            <td><Link to={"/info/"+a._id}>Details</Link>
                            &nbsp;|&nbsp;
                            <Link to={"/edit/"+a._id}>Edit</Link></td>
                        </tr>   
                            
                        )
                    }
                </table>
            </div>
        </div>
        
        </div>
    )
}

    export default Main;