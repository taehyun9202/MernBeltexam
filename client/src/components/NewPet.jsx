import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [like, setLike]  = useState(0);
    const [errors, setErrors] = useState({});

    const addPet = e => {
        e.preventDefault();
        const Pet = {name,type,description,skill1,skill2,skill3,like};
        axios.post("http://localhost:8000/api/pets", Pet)
            .then(res =>{
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate("/");
                }
                console.log(res)})
            .catch( err => console.log(err));
    }

    return(
        <article className="message is-primary" style={{padding:"40px"}}>
            <h1 className="title">Know a pet needing a home?</h1>
            <div className="message-header">
                <p>Add Pet</p>
            </div>
            <div className="message-body">
                <form onSubmit = { addPet }> 
                    <input type="text" className="input is-primary" style={{marginBottom:"10px"}} placeholder="Enter Name" onChange={e=> setName(e.target.value)}/>
                    {
                        errors.name ? <p class="help is-danger">{errors.name.message}</p> : true 
                    }
                    <input type="text" className="input is-primary" style={{marginBottom:"10px"}} placeholder="Enter Type" onChange={e=> setType(e.target.value)}/>
                    {
                        errors.type ? <p class="help is-danger">{errors.type.message}</p> : true 
                    }
                    <input type="text" className="input is-primary" style={{marginBottom:"10px"}} placeholder="Enter Description" onChange={e=> setDescription(e.target.value)}/>
                    {
                        errors.description ? <p class="help is-danger">{errors.description.message}</p> : true 
                    }
                    <input type="text" className="input is-primary" style={{marginBottom:"10px"}} placeholder="Enter Skill 1" onChange={e=> setSkill1(e.target.value)}/>
                    <input type="text" className="input is-primary" style={{marginBottom:"10px"}} placeholder="Enter Skill 2" onChange={e=> setSkill2(e.target.value)}/>
                    <input type="text" className="input is-primary" style={{marginBottom:"10px"}} placeholder="Enter Skill 3" onChange={e=> setSkill3(e.target.value)}/>
                    <button type="submit" style={{width:"100%"}} className="button is-primary">Add Pet</button>
                </form>
            </div>
        </article>
    )
}

export default NewPet;