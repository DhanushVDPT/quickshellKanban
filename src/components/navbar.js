import {useState} from 'react';
// import Select from 'react-select'

const Navbar = () => {
    const [displayValue, setDisplayValue] = useState('None');
    const handleChange = (selectedOption) => {
        console.log("handleChange", selectedOption.target.value);
    }
    const handleClick = () => {
        if (displayValue === 'None'){
            setDisplayValue('block');
        }
        else{
            setDisplayValue('None')
        }
    }
    return(
        <nav className="navbar">
            <button type='button' className="button" id="display" onClick={()=>handleClick()}><img src="setting-lines.png" alt="icon" id="settings"/>Display <img src="down-arrow.png" alt="icon" id="down" /></button>
            <div className="displayOptions" style={{display: displayValue}}>
                <ul id="displayList">
                    <li>
                        <div className="grouping">
                            Grouping
                            <select name="grouping" id="grouping" onChange={handleChange}>
                                <option value="status" label='Status'>Status</option>
                                <option value="user" label='User'>User</option>
                                <option value="priority" label='Priority'>Priority</option>
                            </select>
                            {/* <Select options={[{value:"status", label:"Status"},{value:"user",label:"User"},{value:"priority",label:"Priority"}]} onChange={handleChange}/> */}
                        </div>
                    </li>
                    <li>
                        <div className="ordering">
                            Ordering
                            <select name="ordering" id="ordering">
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;