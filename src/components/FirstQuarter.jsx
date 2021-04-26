import React from 'react'

const FirstQuarter = () => {
    return (
        <>
            <div className ="first_quarter">
                <form>
                    <ol>
                        <li>
                            <div>
                                <select name = "name1" placeholder = "Select Player" label = "Name">
                                    <option>Select Player</option>
                                </select>
                                <select name = "position1" placeholder = "Select Position" label = "Position">
                                    <option>Select Position</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div>
                                <select name = "name2" placeholder = "Select Player" label = "Name">
                                    <option>Select Player</option>
                                </select>
                                <select name = "position2" placeholder = "Select Position" label = "Position">
                                    <option>Select Position</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div>
                                <select name = "name3" placeholder = "Select Player" label = "Name">
                                    <option>Select Player</option>
                                </select>
                                <select name = "position3" placeholder = "Select Position" label = "Position">
                                    <option>Select Position</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div>
                                <select name = "name4" placeholder = "Select Player" label = "Name">
                                    <option>Select Player</option>
                                </select>
                                <select name = "position4" placeholder = "Select Position" label = "Position">
                                    <option>Select Position</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div>
                                <select name = "name5" placeholder = "Select Player" label = "Name">
                                    <option>Select Player</option>
                                </select>
                                <select name = "position5" placeholder = "Select Position" label = "Position">
                                    <option>Select Position</option>
                                </select>
                            </div>
                        </li>
                    </ol>
                </form>
            </div>
        </>
    )
}

export default FirstQuarter;
