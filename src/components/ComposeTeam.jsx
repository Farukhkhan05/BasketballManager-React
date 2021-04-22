import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import TextField from '@material-ui/core/TextField';

const ComposeTeam = () => {

    let options=[
        {value:"Point Guard (PG)", label :"Point Guard (PG)"},
        {value:"Shooting Guard (SG)",label :"Shooting Guard (SG)"},
        {value:"Small Forward (SF)", label :"Small Forward (SF)"},
        {value:"Power Forward (PF)",label :"Power Forward (PF)"},
        {value:"The Center (C)", label:"The Center (C)"}
    ]

    const animatedComponents = makeAnimated();

    const [values, setValues] = useState({
        fname : "",
        lname : "",
        height : "",
        position : ""
    })

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name] : value})
        console.log("values", values)
    }

    const handleSelectChange = (e) =>{
        console.log(e)
        values.position = e
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("form Submitted")
    }

    return (
        <>
            <div className="compose_form">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <TextField value={values.fname} onChange={handleInputChange} name="fname" label ="First Name" variant="outlined" className="input"/>
                    <TextField value={values.lname} onChange={handleInputChange} name="lname" label ="Last Name" variant="outlined" className="input"/>
                    <TextField value={values.height} onChange={handleInputChange} name="height" label ="Height" variant="outlined" className="input" />
                    <Select value={values.position} onChange={handleSelectChange} name="position" components={animatedComponents} options={options} isMulti placeholder="Select Position" className="input"/>
                    <button type = "submit" value="submit" className="submitbtn">Save</button>
                </form>
            </div>
        </>
    )
}

export default ComposeTeam;
