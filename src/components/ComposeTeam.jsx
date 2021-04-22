import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import TextField from '@material-ui/core/TextField';

const ComposeTeam = () => {

    let options=[
        {value:"Point Guard(PG)", label :"Point Guard"},
        {value:"Shooting Guard(SG)",label :"Shooting Guard"},
        {value:"Small Forward(SF)", label :"Small Forward"},
        {value:"Power Forward(PF)",label :"Power Forward"},
        {value:"The Center(C)", label:"The Center"}
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

    return (
        <>
            <div className="compose_form">
                <form>
                    <TextField value={values.fname} onChange={handleInputChange} name="fname" label ="First Name" variant="outlined" className="input"/>
                    <TextField value={values.lname} onChange={handleInputChange} name="lname" label ="Last Name" variant="outlined" className="input"/>
                    <TextField value={values.height} onChange={handleInputChange} name="height" label ="Height" variant="outlined" className="input" />
                    <Select value={values.position} onChange={handleInputChange} name="position" components={animatedComponents} options={options} className="input"/>
                    <button type = "submit" className="submitbtn">Save</button>
                </form>
            </div>
        </>
    )
}

export default ComposeTeam;
